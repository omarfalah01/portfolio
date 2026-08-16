import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { projects } from '../data/portfolio'

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const projectMatch = pathname.match(/^\/projects\/([^/]+)/)
    const project = projectMatch
      ? projects.find((p) => p.id === projectMatch[1])
      : undefined

    const title = project
      ? `${project.name} — ${siteConfig.name}`
      : siteConfig.seo.title
    const description = project
      ? project.shortDescription
      : siteConfig.seo.description

    document.title = title

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', `${siteConfig.seo.url}${pathname}`)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `${siteConfig.seo.url}${pathname}`)
    }
  }, [pathname])

  return null
}
