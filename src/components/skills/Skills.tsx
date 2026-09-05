import { skillCategories, type SkillCategory } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './Skills.css'

function SkillRow({ category, index, delay }: { category: SkillCategory; index: number; delay: number }) {
  const reveal = useReveal<HTMLDivElement>(delay)

  return (
    <div ref={reveal.ref} className={`skill-row ${reveal.className}`} style={reveal.style}>
      <div className="skill-row__head">
        <span className="skill-row__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="skill-row__label">{category.label}</h3>
        <p className="skill-row__caption">{category.caption}</p>
      </div>

      <ul className="skill-row__items">
        {category.skills.map((skill) => (
          <li key={skill} className="skill-chip">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Tech Stack"
      title="What I work with"
      lead="Tools I use in real projects — not a list of everything I have read about."
      wide
    >
      <div className="skills">
        {skillCategories.map((category, i) => (
          <SkillRow key={category.id} category={category} index={i} delay={i * 50} />
        ))}
      </div>
    </Section>
  )
}
