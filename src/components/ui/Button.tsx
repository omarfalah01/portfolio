import type { ReactNode } from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = {
  variant?: Variant
  children: ReactNode
  className?: string
  href?: string
  external?: boolean
  download?: boolean | string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  external,
  download,
  type = 'button',
  onClick,
  disabled,
}: Props) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(download
          ? { download: typeof download === 'string' ? download : true }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
