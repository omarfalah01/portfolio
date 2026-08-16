/**
 * Centralized site & personal configuration.
 * Update this file to change name, contact, SEO, and social links site-wide.
 */
export const siteConfig = {
  name: 'Omar',
  fullName: 'Omar Falah',
  title: 'Software Engineer',
  tagline:
    'Building scalable applications and reliable digital experiences.',
  summary: 'Full-stack · Mobile · Backend · Databases · Desktop',
  email: 'omarfalah433@gmail.com',
  phone: '+964 771 964 9473',
  location: '', // optional — e.g. "Erbil, Kurdistan"
  social: {
    github: 'https://github.com/omarfalah01',
    linkedin: 'https://www.linkedin.com/in/omar-f-3531381ba/',
    githubUsername: 'omarfalah01',
  },
  seo: {
    title: 'Omar Falah — Software Engineer',
    description:
      'Software engineer building full-stack apps, mobile products, backends, and database-driven systems.',
    url: 'https://your-domain.com',
    ogImage: '/og-image.png',
    twitterHandle: '',
  },
} as const

export type SiteConfig = typeof siteConfig
