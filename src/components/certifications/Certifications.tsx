import { certifications, type Certification } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './Certifications.css'

function CertCard({ cert, delay }: { cert: Certification; delay: number }) {
  const reveal = useReveal<HTMLElement>(delay)

  return (
    <article ref={reveal.ref} className={`cert ${reveal.className}`} style={reveal.style}>
      <div className="cert__head">
        <span className="cert__badge" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="9" r="5.5" />
            <path d="M8.5 13.8 7 21.5l5-2.4 5 2.4-1.5-7.7" />
          </svg>
        </span>
        <div>
          <h3 className="cert__name">{cert.name}</h3>
          <p className="cert__issuer">{cert.issuer}</p>
        </div>
        <span className="cert__verified">Certified</span>
      </div>

      <p className="cert__desc">{cert.description}</p>

      <ul className="cert__topics">
        {cert.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      {cert.credentialUrl ? (
        <a
          className="cert__link"
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Verify credential
        </a>
      ) : null}
    </article>
  )
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="06"
      eyebrow="Certifications"
      title="Formal credentials"
      lead="Only certifications I actually hold."
      wide
    >
      <div className="certs">
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} delay={i * 80} />
        ))}
      </div>
    </Section>
  )
}
