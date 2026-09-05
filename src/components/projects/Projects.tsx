import { projects } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

const featured = projects.filter((p) => p.featured)
const supporting = projects.filter((p) => !p.featured)

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Selected Projects"
      title="Systems in production use"
      lead="Six systems built end to end — mobile, enterprise, government and retail. Most are internal client software, so the write-ups cover the problem and the architecture rather than the data."
      wide
    >
      <div className="projects__featured">
        {featured.map((project, i) => (
          <FeaturedProject key={project.id} project={project} index={i} />
        ))}
      </div>

      {supporting.length > 0 ? (
        <div className="projects__more">
          <h3 className="projects__more-title">
            <span>More work</span>
          </h3>
          <div className="projects__grid">
            {supporting.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 80} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  )
}
