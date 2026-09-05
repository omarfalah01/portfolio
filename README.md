# Omar Falah — Portfolio

Personal portfolio for a full-stack & mobile developer. Vite + React 19 + TypeScript, no UI framework.

## Quick start

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck + production build
npm run preview  # serve the build
npm run lint     # oxlint
```

## Where the content lives

All copy is data-driven — components never hardcode text.

| File | What it holds |
|------|---------------|
| `src/config/site.ts` | Name, roles, headline, location, email, phone, social links, SEO |
| `src/data/portfolio.ts` | About, expertise cards, tech stack, projects + case studies, journey, certifications, contact, nav |
| `index.html` | `<title>`, meta/OG tags, JSON-LD — mirror changes made in `site.ts` |
| `public/sitemap.xml`, `public/robots.txt` | Replace `your-domain.com` with the real domain |

### Adding or editing a project

Add an entry to `projects` in `src/data/portfolio.ts`. Everything else follows automatically:

- `featured: true` → renders as a large alternating case-study row
- `featured: false` → renders as a compact card under "More work"
- `visual` → picks the generated illustration (`reader`, `documents`, `people`, `pos`, `fleet`, `registry`)
- `image: { src, alt }` → optional real screenshot; replaces the generated visual
- `accent` → drives that project's accent colour throughout its card, row and case study
- `links` → a `github`/`demo` entry with an `href` reveals "View Code" / "Live Demo" buttons
- `/projects/:id` renders the full case study from `caseStudy`

### Project visuals

`src/components/projects/ProjectVisual.tsx` draws schematic UI illustrations in pure CSS —
no image weight, and no invented data presented as a real screenshot. Drop in real screenshots
via each project's `image` field (and `caseStudy.screenshots`) whenever they're available.

### Experience

`journey` in `portfolio.ts` describes freelance work by the systems delivered. It intentionally
asserts no employers or dates — add real roles there if that changes.

### Certifications

`certifications` holds CCNA. `issuedDate`, `credentialId` and `credentialUrl` are optional;
setting `credentialUrl` adds a "Verify credential" link. Leave fields empty rather than guessing.

## Architecture

```
src/
  components/
    layout/         Navbar, Footer
    hero/           Hero + generated architecture panel
    about/ expertise/ skills/ experience/ certifications/ contact/
    projects/       Projects, FeaturedProject, ProjectCard, ProjectVisual
    ui/             Section, Button, Badge, Marquee  (shared primitives)
  hooks/            useInView, useReveal, useActiveSection, useParallax, useReducedMotion
  pages/            HomePage, CaseStudyPage
  styles/           tokens.css (design tokens), global.css (base + section rhythm)
```

Section numbering lives in one place: pass `index` to `Section` and it renders both the
`[04]` eyebrow and the oversized ghost numeral behind the heading.

## Design & theming

Two themes, both driven entirely by `src/styles/tokens.css`: `:root` holds the light palette
(the default) and `:root[data-theme='dark']` overrides it. Components reference only semantic
tokens — `--surface`, `--tint`, `--ink`, `--pv-ink` — so neither theme needs component changes.

- `--ink` / `--ink-contrast` are the max-contrast pair used for primary buttons. They flip with
  the theme, so the primary CTA is a black pill on light and a white pill on dark.
- Per-project accents come from `portfolio.ts` as raw hex, which can be too pale for text on a
  light ground. Text and small marks read `--project-ink` instead — a darkened mix defined in
  `global.css` — while fills and borders keep the raw accent.
- A small inline script in `index.html` applies the saved theme before first paint, so there is
  no flash. `useTheme` only mirrors and updates the `data-theme` attribute it set.

Type is Space Grotesk / Manrope / JetBrains Mono.

## Motion & accessibility

- Every animation is CSS-driven; scroll reveal uses one `IntersectionObserver` per element and
  parallax is rAF-throttled and only runs while the element is on screen.
- `prefers-reduced-motion: reduce` disables reveals, parallax and looping animations, and makes
  content visible immediately.
- Verified: single `h1` per page, no heading-level jumps, no horizontal overflow at 390px or
  1440px, all images have `alt`, all controls have accessible names, external links use
  `rel="noopener noreferrer"`.

## Deployment

Netlify config is in `netlify.toml`, with an SPA fallback in `public/_redirects` so
`/projects/:id` resolves on a hard refresh.
