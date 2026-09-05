import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { navLinks } from '../../data/portfolio'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const onHome = useLocation().pathname === '/'
  /** Stay in-page on the home route; a leading slash would reload the SPA. */
  const resolveHref = (href: string) => (onHome ? href : `/${href}`)

  return (
    <footer className="footer">
      <div className="footer__inner container--wide">
        <div className="footer__brand">
          <Link to="/" className="footer__name">
            {siteConfig.fullName}
          </Link>
          <p className="footer__role">{siteConfig.title}</p>
          <p className="footer__location">{siteConfig.location}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h2 className="footer__heading">Navigate</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={resolveHref(link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__connect">
          <h2 className="footer__heading">Connect</h2>
          <ul>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar container--wide">
        <p>
          © {year} {siteConfig.fullName}
        </p>
        <p className="footer__built">Built with React, TypeScript &amp; Vite</p>
      </div>
    </footer>
  )
}
