import { about } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './About.css'

export function About() {
  const body = useReveal(80)
  const list = useReveal<HTMLUListElement>(160)

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer across the stack"
      lead="Web, mobile, backend, databases, and desktop—built with care."
    >
      <div className="about">
        <div ref={body.ref} className={`about__copy ${body.className}`} style={body.style}>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        <ul
          ref={list.ref}
          className={`about__highlights ${list.className}`}
          style={list.style}
        >
          {about.highlights.map((item) => (
            <li key={item}>
              <span className="about__dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
