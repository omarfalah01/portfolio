import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'
import { HeroVisual } from './HeroVisual'
import './Hero.css'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="hero__grid container--wide">
        <div className="hero__content">
          <p className="hero__role">{siteConfig.title}</p>
          <h1 id="hero-name" className="hero__name">
            {siteConfig.name}
          </h1>
          <p className="hero__tagline">{siteConfig.tagline}</p>
          <p className="hero__summary">{siteConfig.summary}</p>

          <div className="hero__actions">
            <Button href="#projects">View My Work</Button>
            <Button href={siteConfig.social.github} variant="secondary" external>
              GitHub
            </Button>
          </div>
        </div>

        <div className="hero__visual-wrap">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
