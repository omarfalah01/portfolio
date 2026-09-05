import { siteConfig } from '../../config/site'
import { contact } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { HeroVisual } from './HeroVisual'
import './Hero.css'

const headlineWords = siteConfig.headline.split(' ')

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

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container--wide">
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__pulse" aria-hidden="true" />
            {contact.availability}
            <span className="hero__sep" aria-hidden="true" />
            <span className="hero__location">{siteConfig.location}</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__name">{siteConfig.fullName}</span>
            <span className="hero__headline">
              {headlineWords.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="hero__word"
                  style={{ ['--i' as string]: i }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero__roles">
            {siteConfig.roles.map((role, i) => (
              <span key={role}>
                {i > 0 ? <span className="hero__role-sep" aria-hidden="true" /> : null}
                {role}
              </span>
            ))}
          </p>

          <p className="hero__lead">{siteConfig.tagline}</p>

          <div className="hero__actions">
            <Button href="#projects">
              View Projects
              <ArrowIcon />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <ul className="hero__links">
            <li>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>Email</a>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <HeroVisual />
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  )
}
