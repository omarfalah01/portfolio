import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { navLinks } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import './Navbar.css'

const SECTION_IDS = ['home', 'about', 'skills', 'projects']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const resolveHref = (href: string) => {
    if (onHome) return href
    return `/${href}`
  }

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container--wide">
        <Link to="/" className="nav__brand" aria-label={`${siteConfig.name} home`}>
          <span className="nav__mark" aria-hidden="true" />
          <span className="nav__name">{siteConfig.name}</span>
        </Link>

        <nav className="nav__desktop" aria-label="Primary">
          <ul className="nav__list">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = onHome && active === id
              return (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    className={`nav__link${isActive ? ' is-active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__mobile${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={resolveHref(link.href)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
