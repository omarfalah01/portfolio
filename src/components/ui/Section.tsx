import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Props = {
  id: string
  /** Mono index shown before the eyebrow, e.g. "01". */
  index?: string
  eyebrow?: string
  title: string
  lead?: string
  children: ReactNode
  wide?: boolean
  className?: string
}

/** Shared section shell: consistent heading rhythm + reveal on scroll. */
export function Section({
  id,
  index,
  eyebrow,
  title,
  lead,
  children,
  wide,
  className = '',
}: Props) {
  const reveal = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <div className={wide ? 'container--wide' : 'container'}>
        <header
          ref={reveal.ref}
          className={`section__head ${reveal.className}`}
          style={reveal.style}
        >
          {eyebrow ? (
            <p className="section__eyebrow">
              {index ? <span className="section__index">{index}</span> : null}
              <span>{eyebrow}</span>
            </p>
          ) : null}
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
