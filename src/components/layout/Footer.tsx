import { siteConfig } from '../../config/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container--wide">
        <div className="footer__brand">
          <span className="footer__name">{siteConfig.name}</span>
          <span className="footer__title">{siteConfig.title}</span>
        </div>
        <p className="footer__copy">
          © {year} {siteConfig.fullName}. Built with care.
        </p>
        <ul className="footer__links">
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
          <li>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
          {siteConfig.phone ? (
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                {siteConfig.phone}
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </footer>
  )
}
