import { siteConfig } from '../../config/site'
import { contact, marqueeTech } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { Marquee } from '../ui/Marquee'
import { HeroVisual } from './HeroVisual'
import './Hero.css'

const nameLines = siteConfig.fullName.split(' ')

function ArrowIcon() {
  return (
    <svg
      className="btn__icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

const socials = [
  { id: 'github', label: 'GitHub', href: siteConfig.social.github, external: true },
  { id: 'linkedin', label: 'LinkedIn', href: siteConfig.social.linkedin, external: true },
  { id: 'email', label: 'Email', href: `mailto:${siteConfig.email}`, external: false },
] as const

function SocialIcon({ id }: { id: (typeof socials)[number]['id'] }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (id) {
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19.5c-4 1.2-4-2.2-5.5-2.7M15 21v-3.2c0-.9.1-1.3-.5-1.8 2.5-.3 5-1.3 5-5.5a4.3 4.3 0 0 0-1.2-3 4 4 0 0 0-.1-3s-1-.3-3.2 1.2a11 11 0 0 0-5.9 0C6.9 3.2 5.9 3.5 5.9 3.5a4 4 0 0 0-.1 3 4.3 4.3 0 0 0-1.2 3c0 4.2 2.5 5.2 5 5.5-.6.5-.6 1-.5 1.8V21" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
        </svg>
      )
    case 'email':
      return (
        <svg {...common}>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </svg>
      )
  }
}

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container--wide">
        <div className="hero__content">
          <p className="hero__prompt">
            <span className="hero__path">~/omar-falah</span>
            <span className="hero__cmd">$ whoami</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            {nameLines.map((line, i) => (
              <span key={line} className="hero__line" style={{ ['--i' as string]: i }}>
                {line}
              </span>
            ))}
          </h1>

          {/* Flows as text (not flex) so the closing bracket never wraps alone */}
          <p className="hero__role">
            <span className="hero__bracket" aria-hidden="true">
              &lt;
            </span>
            {siteConfig.roles.map((role, i) => (
              <span key={role} className="hero__role-item">
                {i > 0 ? (
                  <span className="hero__role-sep" aria-hidden="true">
                    /
                  </span>
                ) : null}
                {role}
              </span>
            ))}
            {'\u00A0'}
            <span className="hero__bracket" aria-hidden="true">
              /&gt;
            </span>
          </p>

          <p className="hero__lead">
            <strong>{siteConfig.headline}</strong> {siteConfig.tagline}
          </p>

          <div className="hero__actions">
            <Button href="#projects">
              View Projects
              <ArrowIcon />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <p className="hero__status">
            <span className="hero__status-item">Freelance</span>
            <span className="hero__dot" aria-hidden="true">
              ·
            </span>
            <span className="hero__status-item">{siteConfig.location}</span>
            <span className="hero__dot" aria-hidden="true">
              ·
            </span>
            <span className="hero__status-item hero__status-item--live">
              <span className="hero__pulse" aria-hidden="true" />
              {contact.availability}
            </span>
          </p>

          <ul className="hero__socials">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  className="hero__social"
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <SocialIcon id={social.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <HeroVisual />
        </div>
      </div>

      <Marquee items={marqueeTech} className="hero__marquee" />

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
