import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import './CaseStudyPage.css'

export function CaseStudyPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="case container">
        <h1>Project not found</h1>
        <p>That case study doesn’t exist yet.</p>
        <Button href="/#projects" variant="secondary">
          Back to projects
        </Button>
      </main>
    )
  }

  const { caseStudy } = project

  return (
    <main className="case">
      <div className="case__hero" style={{ ['--project-accent' as string]: project.accent }}>
        <div className="container">
          <Link to="/#projects" className="case__back">
            ← Projects
          </Link>
          <p className="case__eyebrow">Case study</p>
          <h1>{project.name}</h1>
          <p className="case__lead">{project.shortDescription}</p>
          <ul className="case__tech">
            {project.technologies.map((t) => (
              <li key={t}>
                <Badge>{t}</Badge>
              </li>
            ))}
          </ul>
          <div className="case__links">
            {project.status === 'private' ? (
              <span className="case__private">Private / Internal Project</span>
            ) : null}
            {project.links
              .filter((l) => l.href && (l.type === 'github' || l.type === 'demo'))
              .map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="case__content container">
        <section>
          <h2>Overview</h2>
          <p>{caseStudy.overview}</p>
        </section>
        <section>
          <h2>Problem</h2>
          <p>{caseStudy.problem}</p>
        </section>
        <section>
          <h2>Solution</h2>
          <p>{caseStudy.solution}</p>
        </section>
        <section>
          <h2>Architecture</h2>
          <p>{caseStudy.architecture}</p>
        </section>
        <section>
          <h2>Key features</h2>
          <ul className="case__list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Challenges</h2>
          <ul className="case__list">
            {caseStudy.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Results</h2>
          <ul className="case__list">
            {caseStudy.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
        {caseStudy.screenshots.length > 0 ? (
          <section>
            <h2>Screenshots</h2>
            <div className="case__shots">
              {caseStudy.screenshots.map((shot) => (
                <figure key={shot.src}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <h2>Screenshots</h2>
            <p className="case__placeholder">
              Add screenshot paths to this project’s <code>caseStudy.screenshots</code> in{' '}
              <code>src/data/portfolio.ts</code>.
            </p>
          </section>
        )}
      </div>
    </main>
  )
}
