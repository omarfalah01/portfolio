import './Badge.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = '' }: Props) {
  return <span className={`badge ${className}`.trim()}>{children}</span>
}
