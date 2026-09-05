import { Link } from 'react-router-dom'
import type { Project } from '../../data/portfolio'
import { Badge } from '../ui/Badge'
import { ProjectVisual } from './ProjectVisual'
import { useReveal } from '../../hooks/useReveal'
import { useParallax } from '../../hooks/useParallax'
import './FeaturedProject.css'

type Props = {
  project: Project
  index: number
}

/** Large alternating case-study row: media on one side, content on the other. */
export function FeaturedProject({ project, index }: Props) {
  const reveal = useReveal<HTMLElement>()
  const parallax = useParallax<HTMLDivElement>(30)
  const codeLink = project.links.find((l) => l.type === 'github' && l.href)
  const demoLink = project.links.find((l) => l.type === 'demo' && l.href)

  return (
    <article
      ref={reveal.ref}
      className={`fp ${reveal.className}`}
      style={{ ...reveal.style, ['--project-accent' as string]: project.accent }}
      data-flip={index % 2 === 1 ? 'true' : undefined}
    >
      <div className="fp__media">
        <span className="fp__badge" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div ref={parallax} className="fp__media-inner">
          {project.image ? (
            <img
              className="fp__image"
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <ProjectVisual kind={project.visual} accent={project.accent} />
          )}
        </div>
      </div>

      <div className="fp__body">
        <p className="fp__meta">
          {/* The number lives on the media badge — not repeated here */}
          <span className="fp__category">{project.category}</span>
        </p>

        <h3 className="fp__title">
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
          {project.alias ? <span className="fp__alias">/ {project.alias}</span> : null}
        </h3>

        <p className="fp__desc">{project.shortDescription}</p>

        <ul className="fp__features">
          {project.features.slice(0, 6).map((feature) => (
            <li key={feature}>
              <span className="fp__tick" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="fp__tech" aria-label={`${project.name} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="fp__actions">
          <Link className="fp__btn fp__btn--primary" to={`/projects/${project.id}`}>
            View Project
            <svg
              width="15"
              height="15"
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
          </Link>

          {codeLink ? (
            <a
              className="fp__btn"
              href={codeLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          ) : null}

          {demoLink ? (
            <a
              className="fp__btn"
              href={demoLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          ) : null}

          {project.status === 'private' && !codeLink ? (
            <span className="fp__private">
              <span className="fp__lock" aria-hidden="true" />
              Private client system
            </span>
          ) : null}
        </div>
      </div>
    </article>
  )
}
