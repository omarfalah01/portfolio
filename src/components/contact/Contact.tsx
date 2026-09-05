import { siteConfig } from '../../config/site'
import { contact } from '../../data/portfolio'
import { useReveal } from '../../hooks/useReveal'
import './Contact.css'

type Method = {
  id: string
  label: string
  value: string
  href: string
  external?: boolean
  icon: 'mail' | 'phone' | 'github' | 'linkedin'
}

const methods: Method[] = [
  {
    id: 'email',
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: 'mail',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    icon: 'phone',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: `@${siteConfig.social.githubUsername}`,
    href: siteConfig.social.github,
    external: true,
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: siteConfig.fullName,
    href: siteConfig.social.linkedin,
    external: true,
    icon: 'linkedin',
  },
]

function MethodIcon({ type }: { type: Method['icon'] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (type) {
    case 'mail':
      return (
        <svg {...common}>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 6.2 2 2 0 0 1 6 4Z" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19.5c-4 1.2-4-2.2-5.5-2.7M15 21v-3.2c0-.9.1-1.3-.5-1.8 2.5-.3 5-1.3 5-5.5a4.3 4.3 0 0 0-1.2-3 4 4 0 0 0-.1-3s-1-.3-3.2 1.2a11 11 0 0 0-5.9 0C6.9 3.2 5.9 3.5 5.9 3.5a4 4 0 0 0-.1 3 4.3 4.3 0 0 0-1.2 3c0 4.2 2.5 5.2 5 5.5-.6.5-.6 1-.5 1.8V21" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
        </svg>
      )
  }
}

export function Contact() {
  const head = useReveal<HTMLDivElement>()
  const grid = useReveal<HTMLUListElement>(120)

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="section__inner container--wide">
        <span className="section__ghost" aria-hidden="true">
          07
        </span>

        <div ref={head.ref} className={`contact__head ${head.className}`} style={head.style}>
          <p className="section__eyebrow">
            <span className="section__index">[07]</span>
            <span className="section__rule" aria-hidden="true" />
            <span className="section__label">Contact</span>
          </p>

          <h2 id="contact-title" className="contact__title">
            {contact.heading}
          </h2>

          <p className="contact__lead">{contact.lead}</p>

          <p className="contact__prompt">
            <span className="contact__prompt-sign">$</span>
            mail -s &quot;new project&quot;
          </p>

          <div className="contact__actions">
            <a className="contact__cta" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            <p className="contact__status">
              <span className="contact__pulse" aria-hidden="true" />
              {contact.availability}
            </p>
          </div>
        </div>

        <ul
          ref={grid.ref}
          className={`contact__methods ${grid.className}`}
          style={grid.style}
        >
          {methods.map((method) => (
            <li key={method.id}>
              <a
                className="contact__method"
                href={method.href}
                {...(method.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact__method-icon">
                  <MethodIcon type={method.icon} />
                </span>
                <span className="contact__method-text">
                  <span className="contact__method-label">{method.label}</span>
                  <span className="contact__method-value">{method.value}</span>
                </span>
                <svg
                  className="contact__method-arrow"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 11 11 5M6 5h5v5" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <p className="contact__location">
          Based in {siteConfig.location} · Working with clients remotely
        </p>
      </div>
    </section>
  )
}
