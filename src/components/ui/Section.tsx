import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Props = {
  id: string
  eyebrow?: string
  title: string
  lead?: string
  children: ReactNode
  wide?: boolean
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  wide,
  className = '',
}: Props) {
  const reveal = useReveal()

  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className={wide ? 'container--wide' : 'container'}>
        <header
          ref={reveal.ref}
          className={reveal.className}
          style={reveal.style}
        >
          {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {lead ? <p className="section__lead">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
