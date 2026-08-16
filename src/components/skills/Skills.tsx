import { skillCategories } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { Badge } from '../ui/Badge'
import { useReveal } from '../../hooks/useReveal'
import './Skills.css'

function SkillGroup({
  label,
  skills,
  delay,
}: {
  label: string
  skills: string[]
  delay: number
}) {
  const reveal = useReveal(delay)

  return (
    <article
      ref={reveal.ref}
      className={`skill-group ${reveal.className}`}
      style={reveal.style}
    >
      <h3 className="skill-group__title">{label}</h3>
      <ul className="skill-group__list">
        {skills.map((skill) => (
          <li key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I use"
      lead="Grouped by layer—no vanity percentage bars."
      wide
    >
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <SkillGroup
            key={cat.id}
            label={cat.label}
            skills={cat.skills}
            delay={i * 60}
          />
        ))}
      </div>
    </Section>
  )
}
