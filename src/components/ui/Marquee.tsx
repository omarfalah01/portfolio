import './Marquee.css'

type Props = {
  items: readonly string[]
  /** Seconds for one full pass. Longer = slower. */
  duration?: number
  reverse?: boolean
  /** 'text' = display type with diamond separators, 'pill' = bordered chips. */
  variant?: 'text' | 'pill'
  className?: string
}

/**
 * Full-bleed scrolling strip. The track holds two identical groups and
 * translates by -50%, so the loop is seamless. The duplicate is hidden from
 * assistive tech, and the animation stops entirely for reduced motion.
 */
export function Marquee({
  items,
  duration = 42,
  reverse,
  variant = 'text',
  className = '',
}: Props) {
  return (
    <div className={`marquee marquee--${variant} ${className}`.trim()}>
      <div
        className={`marquee__track${reverse ? ' marquee__track--reverse' : ''}`}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="marquee__group"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((item) => (
              <li key={item}>
                <span className="marquee__item">
                  {variant === 'pill' ? (
                    <span className="marquee__dot" aria-hidden="true" />
                  ) : null}
                  {item}
                </span>
                {variant === 'text' ? (
                  <span className="marquee__sep" aria-hidden="true">
                    ✦
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
