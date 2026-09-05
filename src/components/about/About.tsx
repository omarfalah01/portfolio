import { siteConfig } from '../../config/site'
import { about } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './About.css'

export function About() {
  const copy = useReveal(60)
  const panel = useReveal(140)

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="I build the whole system, not just the screen."
      wide
    >
      <div className="about">
        <div ref={copy.ref} className={`about__copy ${copy.className}`} style={copy.style}>
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={i === 0 ? 'about__lead-para' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside
          ref={panel.ref}
          className={`about__panel ${panel.className}`}
          style={panel.style}
          aria-label="At a glance"
        >
          <div className="about__panel-block">
            <h3 className="about__panel-title">Focus</h3>
            <ul className="about__highlights">
              {about.highlights.map((item) => (
                <li key={item}>
                  <span className="about__marker" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about__panel-block">
            <h3 className="about__panel-title">Details</h3>
            <dl className="about__facts">
              <div>
                <dt>Based in</dt>
                <dd>{siteConfig.location}</dd>
              </div>
              <div>
                <dt>Working as</dt>
                <dd>Freelance developer</dd>
              </div>
              <div>
                <dt>Certified</dt>
                <dd>Cisco CCNA</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </Section>
  )
}
