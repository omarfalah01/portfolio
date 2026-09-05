import { journey, type JourneyItem } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './Experience.css'

function TimelineItem({ item, delay }: { item: JourneyItem; delay: number }) {
  const reveal = useReveal<HTMLLIElement>(delay)

  return (
    <li ref={reveal.ref} className={`tl__item ${reveal.className}`} style={reveal.style}>
      <span className="tl__marker" aria-hidden="true" />
      <div className="tl__content">
        <p className="tl__meta">{item.meta}</p>
        <h3 className="tl__title">{item.title}</h3>
        <p className="tl__desc">{item.description}</p>
        <ul className="tl__tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="05"
      eyebrow="Experience"
      title="How I work, and what I've worked on"
      lead="I work independently, directly with the people who will use the software. These are the areas that make up most of that work."
      wide
    >
      <ol className="tl">
        {journey.map((item, i) => (
          <TimelineItem key={item.id} item={item} delay={i * 70} />
        ))}
      </ol>
    </Section>
  )
}
