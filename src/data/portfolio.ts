/**
 * Portfolio content — skills, certifications, projects, experience.
 * Edit here; components read from this file.
 */

export type SkillCategory = {
  id: string
  label: string
  skills: string[]
}

export type Certification = {
  id: string
  name: string
  issuer: string
  highlight: boolean
  description: string
  topics: string[]
  credentialImage?: string
  credentialUrl?: string
  issuedDate?: string
  credentialId?: string
}

export type ProjectLink = {
  label: string
  href?: string
  type: 'github' | 'demo' | 'case' | 'private'
}

export type Project = {
  id: string
  name: string
  shortDescription: string
  technologies: string[]
  features: string[]
  status: 'public' | 'private'
  links: ProjectLink[]
  accent: string
  caseStudy: {
    overview: string
    problem: string
    solution: string
    architecture: string
    challenges: string[]
    results: string[]
    screenshots: { src: string; alt: string }[]
  }
}

export type ExperienceItem = {
  id: string
  position: string
  organization: string
  date: string
  description: string
  technologies: string[]
  responsibilities: string[]
}

export type ExpertiseArea = {
  id: string
  title: string
  description: string
  icon: 'stack' | 'mobile' | 'backend' | 'database' | 'desktop' | 'network'
}

export const about = {
  paragraphs: [
    'I’m a software engineer who builds across the stack—web apps, mobile clients, APIs, databases, and desktop tools.',
    'I care about clean architecture, solid data models, and products that feel simple to use. Whether it’s a mobile reading app or an internal management system, I focus on reliability and clarity.',
    'I also hold a Cisco CCNA certification, which helps when systems need to talk across real networks.',
  ],
  highlights: [
    'Full-stack web apps',
    'Mobile (Flutter & React Native)',
    'Backend APIs',
    'PostgreSQL & databases',
    'Desktop / Electron',
  ],
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    skills: ['Flutter', 'React Native'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Prisma', 'SQLAlchemy'],
  },
  {
    id: 'desktop',
    label: 'Desktop',
    skills: ['Electron'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    skills: ['Supabase', 'Railway', 'Appwrite', 'Cloudinary'],
  },
  {
    id: 'networking',
    label: 'Networking',
    skills: ['TCP/IP', 'Routing', 'Switching', 'Troubleshooting'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Windows'],
  },
]

/** Kept for reference — not featured heavily on the homepage */
export const certifications: Certification[] = [
  {
    id: 'ccna',
    name: 'Cisco CCNA',
    issuer: 'Cisco',
    highlight: false,
    description: 'Cisco Certified Network Associate.',
    topics: ['Networking fundamentals'],
    credentialImage: '',
    credentialUrl: '',
    issuedDate: '',
    credentialId: '',
  },
]

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Apps',
    description: 'Web applications with solid frontend and backend structure.',
    icon: 'stack',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Cross-platform apps with Flutter and React Native.',
    icon: 'mobile',
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    description: 'REST APIs, auth, business logic, and integrations.',
    icon: 'backend',
  },
  {
    id: 'database',
    title: 'Databases',
    description: 'PostgreSQL design, SQL, migrations, and data modeling.',
    icon: 'database',
  },
  {
    id: 'desktop',
    title: 'Desktop Apps',
    description: 'Offline-friendly Windows apps with Electron and SQLite.',
    icon: 'desktop',
  },
]

export const projects: Project[] = [
  {
    id: 'bijare',
    name: 'Bijare',
    shortDescription:
      'A book reading and summary app with audio, search, and Kurdish Sorani support.',
    technologies: ['Flutter', 'React', 'Node.js', 'PostgreSQL'],
    features: [
      'Book summaries',
      'Audio playback',
      'Chapters & categories',
      'Search & highlighting',
      'Kurdish Sorani',
      'Mobile-first UX',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private / Internal Project', type: 'private' },
    ],
    accent: '#3dcea7',
    caseStudy: {
      overview:
        'Bijare is a reading app focused on book summaries, audio, and localized content—including Kurdish Sorani.',
      problem:
        'Readers needed a simple way to browse, skim, and listen to book content on mobile.',
      solution:
        'Built a mobile-first experience around books, chapters, summaries, search, and audio.',
      architecture:
        'Client apps over content APIs, with relational storage for books, categories, and localization.',
      challenges: [
        'Kurdish Sorani localization without cluttering the UI',
        'Balancing summaries with deeper chapter and audio flows',
        'Keeping search and browsing fast on mobile',
      ],
      results: [
        'Clear reading flows across summaries, chapters, and audio',
        'Mobile-friendly discovery with categories and search',
        'Localization handled as a core product feature',
      ],
      screenshots: [],
    },
  },
  {
    id: 'document-management',
    name: 'Document Management System',
    shortDescription:
      'Document platform with roles, departments, archives, and digital signatures.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Cloudinary'],
    features: [
      'Role-based access',
      'Departments',
      'Archives',
      'Digital signatures',
      'Cloud storage',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private / Internal Project', type: 'private' },
    ],
    accent: '#5b8def',
    caseStudy: {
      overview:
        'An internal document system for access control, departments, archives, and signing.',
      problem:
        'Teams needed one place to manage, route, and sign documents with clear permissions.',
      solution:
        'Built role-aware document workflows with departments, archives, and cloud file storage on PostgreSQL.',
      architecture:
        'Web client → REST API → PostgreSQL metadata → cloud storage for files.',
      challenges: [
        'Permissions across roles and departments',
        'Handling mixed document and image assets',
        'Keeping archive and signature flows clear',
      ],
      results: [
        'Centralized document operations',
        'Clear ownership and access model',
        'Cloud-backed file handling',
      ],
      screenshots: [],
    },
  },
  {
    id: 'vehicle-management',
    name: 'Vehicle Management System',
    shortDescription:
      'Offline Windows desktop app for vehicles, departments, and expenses.',
    technologies: ['Electron', 'React', 'SQLite', 'Prisma'],
    features: [
      'Vehicle registry',
      'Departments & types',
      'Expense tracking',
      'Offline desktop UX',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private / Internal Project', type: 'private' },
    ],
    accent: '#e8b84a',
    caseStudy: {
      overview:
        'A Windows desktop app for vehicle records, departments, types, and expenses—works offline.',
      problem:
        'Operations needed a reliable offline tool for vehicle inventory and expenses.',
      solution:
        'Electron app with local SQLite via Prisma for vehicles, departments, and expenses.',
      architecture:
        'Electron + React UI + Prisma/SQLite, packaged for Windows.',
      challenges: [
        'Offline-first workflows that still feel modern',
        'Windows packaging and distribution',
        'Keeping local records consistent',
      ],
      results: [
        'Desktop app suited to Windows environments',
        'Local SQLite without a required always-on server',
        'Clear model for vehicles and expenses',
      ],
      screenshots: [],
    },
  },
  {
    id: 'hr-personnel',
    name: 'HR / Personnel System',
    shortDescription:
      'Personnel platform for employees, departments, payroll, and leave.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js'],
    features: [
      'Employee records',
      'Departments & roles',
      'Payroll',
      'Leave management',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private / Internal Project', type: 'private' },
    ],
    accent: '#34d399',
    caseStudy: {
      overview:
        'An HR system for organizational structure, employee records, payroll, and leave.',
      problem:
        'HR needed one system instead of fragmented spreadsheets and tools.',
      solution:
        'Modeled personnel data with workflows for records, leave, and payroll-related tasks.',
      architecture:
        'Full-stack web app with PostgreSQL personnel models and backend business rules.',
      challenges: [
        'Clean org hierarchy and roles',
        'Leave and payroll edge cases',
        'Efficient daily admin UX',
      ],
      results: [
        'Centralized personnel management',
        'Leave and payroll-related workflows in one place',
        'Solid foundation for organizational data',
      ],
      screenshots: [],
    },
  },
  {
    id: 'land-registry',
    name: 'Land Registry System',
    shortDescription:
      'Web system for land records, locations, ownership, and search.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: [
      'Land records',
      'Locations & ownership',
      'Search & data entry',
      'PostgreSQL data layer',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private / Internal Project', type: 'private' },
    ],
    accent: '#38bdf8',
    caseStudy: {
      overview:
        'A web registry for land records, locations, and ownership data.',
      problem:
        'Land information needed accurate digital records with fast search and entry.',
      solution:
        'Registry CRUD and search on a PostgreSQL schema for locations and ownership.',
      architecture:
        'Web client and API over PostgreSQL, with search-oriented queries.',
      challenges: [
        'Schema that stays accurate as fields evolve',
        'Fast search and data entry',
        'Integrity for ownership relationships',
      ],
      results: [
        'Structured digital registry workflows',
        'Searchable PostgreSQL-backed records',
        'Clear location and ownership data model',
      ],
      screenshots: [],
    },
  },
]

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    position: 'Software Engineer',
    organization: 'Your Organization',
    date: 'YYYY — Present',
    description:
      'Replace this placeholder with your real role, responsibilities, and impact.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Flutter'],
    responsibilities: [
      'Describe a core responsibility or ownership area',
      'Describe systems you built or maintained',
      'Describe collaboration or delivery outcomes',
    ],
  },
  {
    id: 'exp-2',
    position: 'Previous Role',
    organization: 'Previous Organization',
    date: 'YYYY — YYYY',
    description:
      'Another placeholder entry—update or remove as needed from src/data/portfolio.ts.',
    technologies: ['Python', 'Flask', 'MySQL'],
    responsibilities: [
      'Add a concrete responsibility',
      'Add another responsibility',
    ],
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
] as const
