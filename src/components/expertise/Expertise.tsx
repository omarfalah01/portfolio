import { expertiseAreas, type ExpertiseArea } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './Expertise.css'

function Icon({ type }: { type: ExpertiseArea['icon'] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (type) {
    case 'stack':
      return (
        <svg {...common}>
          <path d="M12 2 3 7l9 5 9-5-9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    case 'backend':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
          <circle cx="7" cy="17" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      )
    case 'desktop':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )
    case 'network':
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="5" cy="18" r="2.2" />
          <circle cx="19" cy="18" r="2.2" />
          <path d="M12 7.2v4.5M12 11.7 6.2 16.2M12 11.7l5.8 4.5" />
        </svg>
      )
  }
}

function Card({ area, delay }: { area: ExpertiseArea; delay: number }) {
  const reveal = useReveal(delay)
  return (
    <article
      ref={reveal.ref}
      className={`expertise-card ${reveal.className}`}
      style={reveal.style}
    >
      <div className="expertise-card__icon" aria-hidden="true">
        <Icon type={area.icon} />
      </div>
      <h3>{area.title}</h3>
      <p>{area.description}</p>
    </article>
  )
}

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="What I Build"
      title="What I build"
      lead="Across web, mobile, backend, data, and desktop."
      wide
    >
      <div className="expertise-grid">
        {expertiseAreas.map((area, i) => (
          <Card key={area.id} area={area} delay={i * 70} />
        ))}
      </div>
    </Section>
  )
}
