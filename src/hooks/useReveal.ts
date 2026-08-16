import { useEffect, useState, type CSSProperties } from 'react'
import { useInView } from './useInView'

/** Combines in-view detection with reveal CSS class helpers */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const [ref, isInView] = useInView<T>()
  const [style, setStyle] = useState<CSSProperties>({})

  useEffect(() => {
    if (delay) {
      setStyle({ transitionDelay: `${delay}ms` })
    }
  }, [delay])

  return {
    ref,
    className: `reveal${isInView ? ' is-visible' : ''}`,
    style,
    isInView,
  }
}
