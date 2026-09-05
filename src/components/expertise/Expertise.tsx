import { expertiseAreas, type ExpertiseArea } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './Expertise.css'

function Icon({ type }: { type: ExpertiseArea['icon'] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (type) {
    case 'stack':
      return (
        <svg {...common}>
          <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
          <path d="m3 12 9 4.5L21 12" />
          <path d="m3 16.5 9 4.5 9-4.5" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
          <path d="M9 6h6" />
        </svg>
      )
    case 'systems':
      return (
        <svg {...common}>
          <rect x="9.5" y="2.5" width="5" height="5" rx="1.2" />
          <rect x="3" y="16.5" width="5" height="5" rx="1.2" />
          <rect x="16" y="16.5" width="5" height="5" rx="1.2" />
          <path d="M12 7.5v4.5M5.5 16.5V13h13v3.5" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
          <path d="M4.5 5.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
          <path d="M4.5 11.5v7c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-7" />
        </svg>
      )
    case 'api':
      return (
        <svg {...common}>
          <path d="M8.5 6 3.5 12l5 6" />
          <path d="m15.5 6 5 6-5 6" />
          <path d="M13.5 4.5 10.5 19.5" />
        </svg>
      )
    case 'automation':
      return (
        <svg {...common}>
          <path d="M3 7h8" />
          <path d="M3 17h5" />
          <circle cx="14" cy="7" r="2.5" />
          <circle cx="11" cy="17" r="2.5" />
          <path d="M16.5 7H21" />
          <path d="M13.5 17H21" />
        </svg>
      )
  }
}

function Card({ area, index, delay }: { area: ExpertiseArea; index: number; delay: number }) {
  const reveal = useReveal<HTMLElement>(delay)

  return (
    <article
      ref={reveal.ref}
      className={`ex-card ${reveal.className}`}
      style={reveal.style}
    >
      <div className="ex-card__top">
        <span className="ex-card__icon">
          <Icon type={area.icon} />
        </span>
        <span className="ex-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="ex-card__title">{area.title}</h3>
      <p className="ex-card__desc">{area.description}</p>
    </article>
  )
}

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow="What I Build"
      title="Systems, not just websites"
      lead="Six kinds of work that make up most of what I deliver — from the mobile client down to the schema underneath it."
      wide
    >
      <div className="ex-grid">
        {expertiseAreas.map((area, i) => (
          <Card key={area.id} area={area} index={i} delay={i * 60} />
        ))}
      </div>
    </Section>
  )
}
