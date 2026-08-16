# Portfolio — Software Engineer

Premium personal portfolio built with Vite, React, and TypeScript.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Update your content

Edit these files — components read from them:

| File | What to change |
|------|----------------|
| `src/config/site.ts` | Name, email, social links, SEO, CV path, GitHub username |
| `src/data/portfolio.ts` | About, skills, certifications, projects, experience |
| `public/cv.pdf` | Your CV (replace the placeholder note) |
| `public/sitemap.xml` / `robots.txt` | Your real domain |
| `index.html` | Mirror SEO/JSON-LD after updating `site.ts` |

### Certifications

Set `issuedDate`, `credentialId`, `credentialImage`, and/or `credentialUrl` on the CCNA entry. Do not invent credential details.

### Experience

Replace placeholder roles in `experience` with real positions and dates.

### GitHub section

Set `social.githubUsername` to your public username. Private repos are never fetched.

### Project screenshots

Add files under `public/` and list them in each project’s `caseStudy.screenshots`.

## Stack

- Vite + React 19 + TypeScript
- React Router (home + case studies)
- CSS design tokens (no UI framework)
- GitHub REST API (optional, public data only)

## Design

Dark-first, teal accent, Syne / Manrope / JetBrains Mono. Respects `prefers-reduced-motion`.
