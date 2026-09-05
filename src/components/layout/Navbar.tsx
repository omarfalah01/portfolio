import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { navLinks } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ThemeToggle } from '../ui/ThemeToggle'
import './Navbar.css'

/** Stable module-level array — used as an effect dependency in useActiveSection. */
const SECTION_IDS = navLinks.map((link) => link.href.replace('#', ''))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  /** Hash links must be absolute when we're on a case-study route. */
  const resolveHref = (href: string) => (onHome ? href : `/${href}`)

  return (
    <header className={`nav${scrolled || open ? ' nav--solid' : ''}`}>
      <div className="nav__inner container--wide">
        <Link to="/" className="nav__brand" aria-label={`${siteConfig.fullName} — home`}>
          <span className="nav__mark" aria-hidden="true">
            OF
          </span>
          <span className="nav__brand-text">
            <span className="nav__name">{siteConfig.fullName}</span>
            <span className="nav__role">{siteConfig.roles[0]}</span>
          </span>
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
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="nav__end">
          <ThemeToggle />

          <a className="nav__cta" href={resolveHref('#contact')}>
            Let&rsquo;s work together
          </a>

          <button
            type="button"
            className={`nav__toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link, i) => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.href} style={{ ['--i' as string]: i }}>
                  <a
                    href={resolveHref(link.href)}
                    className={onHome && active === id ? 'is-active' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="nav__mobile-index">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="nav__mobile-foot">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <div className="nav__mobile-social">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
