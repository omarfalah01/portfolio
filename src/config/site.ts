/**
 * Centralized site & personal configuration.
 * Update this file to change name, contact, SEO, and social links site-wide.
 */
export const siteConfig = {
  name: 'Omar Falah',
  shortName: 'Omar',
  fullName: 'Omar Falah',
  title: 'Full-Stack Developer · Mobile Developer',
  roles: ['Full-Stack Developer', 'Mobile Developer'],
  headline: 'Building digital systems that solve real-world problems.',
  tagline:
    'I build full-stack web applications, mobile apps, management systems and scalable database-driven platforms — the software organizations actually run on.',
  location: 'Kurdistan, Iraq',
  email: 'omarfalah433@gmail.com',
  phone: '+964 771 964 9473',
  social: {
    github: 'https://github.com/omarfalah01',
    linkedin: 'https://www.linkedin.com/in/omar-f-3531381ba/',
    githubUsername: 'omarfalah01',
  },
  seo: {
    title: 'Omar Falah — Full-Stack & Mobile Developer',
    description:
      'Full-stack and mobile developer in Kurdistan, Iraq. I build web applications, React Native and Flutter apps, management systems, REST APIs and PostgreSQL-backed platforms.',
    url: 'https://your-domain.com',
    ogImage: '/og-image.png',
    twitterHandle: '',
  },
} as const

export type SiteConfig = typeof siteConfig
