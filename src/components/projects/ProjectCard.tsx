import { Link } from 'react-router-dom'
import type { Project } from '../../data/portfolio'
import { Badge } from '../ui/Badge'
import { useReveal } from '../../hooks/useReveal'
import './ProjectCard.css'

type Props = {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: Props) {
  const reveal = useReveal(delay)

  return (
    <article
      ref={reveal.ref}
      className={`project-card ${reveal.className}`}
      style={{ ...reveal.style, ['--project-accent' as string]: project.accent }}
    >
      <div className="project-card__preview" aria-hidden="true">
        <div className="project-card__preview-inner">
          <span className="project-card__preview-label">{project.name.split(' ')[0]}</span>
          <div className="project-card__bars">
            <span />
            <span />
            <span />
          </div>
        </div>
        {project.status === 'private' ? (
          <span className="project-card__status">Private / Internal</span>
        ) : null}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        <ul className="project-card__tech">
          {project.technologies.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>

        <ul className="project-card__features">
          {project.features.slice(0, 4).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <Link className="project-card__btn project-card__btn--primary" to={`/projects/${project.id}`}>
            Case Study
          </Link>
          {project.links.map((link) => {
            if (link.type === 'case') return null
            if (link.type === 'private' || !link.href) {
              return (
                <span key={link.label} className="project-card__private">
                  {link.label}
                </span>
              )
            }
            return (
              <a
                key={link.label}
                className="project-card__btn"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </article>
  )
}
