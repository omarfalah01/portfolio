import { useEffect, useRef, type RefObject } from 'react'

/**
 * Sets a `--parallax` CSS variable on the element based on its position
 * in the viewport. Only runs while the element is actually on screen,
 * updates are rAF-throttled, and it stays off entirely for reduced motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  strength = 36,
): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let visible = false
    let frame = 0

    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      // -1 (below the fold) → 0 (centered) → 1 (above it)
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2)
      el.style.setProperty('--parallax', `${(progress * strength).toFixed(2)}px`)
    }

    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) update()
      },
      { rootMargin: '120px 0px' },
    )

    observer.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [strength])

  return ref
}
