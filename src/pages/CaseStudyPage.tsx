import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProjectVisual } from '../components/projects/ProjectVisual'
import './CaseStudyPage.css'

export function CaseStudyPage() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const project = index >= 0 ? projects[index] : undefined

  if (!project) {
    return (
      <main className="case case--missing container">
        <h1>Project not found</h1>
        <p>That case study doesn’t exist.</p>
        <Button href="/#projects" variant="secondary">
          Back to projects
        </Button>
      </main>
    )
  }

  const next = projects[(index + 1) % projects.length]
  const { caseStudy } = project
  const codeLink = project.links.find((l) => l.type === 'github' && l.href)

  return (
    <main
      className="case"
      style={{ ['--project-accent' as string]: project.accent }}
    >
      <div className="case__hero container">
        <Link to="/#projects" className="case__back">
          <span aria-hidden="true">←</span> All projects
        </Link>

        <p className="case__category">{project.category}</p>

        <h1 className="case__title">
          {project.name}
          {project.alias ? <span className="case__alias">/ {project.alias}</span> : null}
        </h1>

        <p className="case__lead">{project.shortDescription}</p>

        <ul className="case__tech" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {codeLink ? (
          <a
            className="case__code"
            href={codeLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        ) : (
          <p className="case__private">
            Private client system — code and data are not public.
          </p>
        )}
      </div>

      <div className="case__visual container">
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

      <div className="case__layout container">
        <aside className="case__meta" aria-label="Project summary">
          <dl>
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.technologies.join(', ')}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status === 'private' ? 'Private / internal' : 'Public'}</dd>
            </div>
          </dl>
        </aside>

        <div className="case__content">
          <section className="case__section">
            <h2>Overview</h2>
            <p>{caseStudy.overview}</p>
          </section>

          <section className="case__section">
            <h2>The problem</h2>
            <p>{caseStudy.problem}</p>
          </section>

          <section className="case__section">
            <h2>The solution</h2>
            <p>{caseStudy.solution}</p>
          </section>

          <section className="case__section">
            <h2>Architecture</h2>
            <p>{caseStudy.architecture}</p>
          </section>

          <section className="case__section">
            <h2>Key features</h2>
            <ul className="case__grid-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="case__section">
            <h2>Challenges</h2>
            <ul className="case__list">
              {caseStudy.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="case__section">
            <h2>Outcome</h2>
            <ul className="case__list">
              {caseStudy.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>

          {caseStudy.screenshots.length > 0 ? (
            <section className="case__section">
              <h2>Screenshots</h2>
              <div className="case__shots">
                {caseStudy.screenshots.map((shot) => (
                  <figure key={shot.src}>
                    <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>

      <nav className="case__next container" aria-label="Next project">
        <Link to={`/projects/${next.id}`}>
          <span className="case__next-label">Next project</span>
          <span className="case__next-name">
            {next.name}
            <span aria-hidden="true">→</span>
          </span>
        </Link>
      </nav>
    </main>
  )
}
