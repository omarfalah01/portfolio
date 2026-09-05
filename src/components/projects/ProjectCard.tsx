import { Link } from 'react-router-dom'
import type { Project } from '../../data/portfolio'
import { Badge } from '../ui/Badge'
import { ProjectVisual } from './ProjectVisual'
import { useReveal } from '../../hooks/useReveal'
import './ProjectCard.css'

type Props = {
  project: Project
  index: number
  delay?: number
}

/** Compact card used for supporting projects below the featured rows. */
export function ProjectCard({ project, index, delay = 0 }: Props) {
  const reveal = useReveal<HTMLElement>(delay)
  const codeLink = project.links.find((l) => l.type === 'github' && l.href)

  return (
    <article
      ref={reveal.ref}
      className={`pcard ${reveal.className}`}
      style={{ ...reveal.style, ['--project-accent' as string]: project.accent }}
    >
      <div className="pcard__media">
        <span className="pcard__badge" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ProjectVisual kind={project.visual} accent={project.accent} />
        )}
      </div>

      <div className="pcard__body">
        <p className="pcard__category">{project.category}</p>

        <h3 className="pcard__title">
          <Link to={`/projects/${project.id}`}>
            {project.name}
            <span className="pcard__cover" aria-hidden="true" />
          </Link>
        </h3>

        <p className="pcard__desc">{project.shortDescription}</p>

        <ul className="pcard__tech" aria-label={`${project.name} technologies`}>
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="pcard__foot">
          <span className="pcard__link">
            View Project
            <svg
              width="14"
              height="14"
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
          </span>
          {codeLink ? (
            <a
              className="pcard__code"
              href={codeLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          ) : (
            <span className="pcard__status">Private</span>
          )}
        </div>
      </div>
    </article>
  )
}
