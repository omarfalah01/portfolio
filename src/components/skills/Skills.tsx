import { skillCategories } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { Marquee } from '../ui/Marquee'
import { useReveal } from '../../hooks/useReveal'
import './Skills.css'

/** Every technology, split into three drifting rows. */
const ROW_COUNT = 3
const allSkills = skillCategories.flatMap((category) => category.skills)
const rows = Array.from({ length: ROW_COUNT }, (_, i) =>
  allSkills.filter((_, index) => index % ROW_COUNT === i),
)

export function Skills() {
  const summary = useReveal<HTMLDivElement>(120)

  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Tech Stack"
      title="What I work with"
      lead="Tools I use in real projects — not a list of everything I have read about."
      wide
    >
      <div className="skills__rows">
        {rows.map((row, i) => (
          <Marquee
            key={i}
            items={row}
            variant="pill"
            reverse={i % 2 === 1}
            duration={38 + i * 7}
          />
        ))}
      </div>

      <div
        ref={summary.ref}
        className={`skills__summary ${summary.className}`}
        style={summary.style}
      >
        {skillCategories.map((category) => (
          <div className="skills__group" key={category.id}>
            <h3 className="skills__group-label">{category.label}</h3>
            <p className="skills__group-list">{category.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
