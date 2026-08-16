import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Handles hash navigation when arriving from another route */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    if (!hash) {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}
