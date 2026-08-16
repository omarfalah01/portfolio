import { projects } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work"
      lead="Selected products and systems I’ve built."
      wide
    >
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 80} />
        ))}
      </div>
      <p className="projects-note">
        Add more projects in <code>src/data/portfolio.ts</code>—cards and case studies update automatically.
      </p>
    </Section>
  )
}
