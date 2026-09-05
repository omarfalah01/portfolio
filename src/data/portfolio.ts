/**
 * Portfolio content — about, expertise, stack, projects, journey, certifications.
 * All copy here is factual. Components read from this file; edit content here only.
 */

export type SkillCategory = {
  id: string
  label: string
  caption: string
  skills: string[]
}

export type Certification = {
  id: string
  name: string
  issuer: string
  description: string
  topics: string[]
  /** Optional real credential metadata — leave empty rather than inventing values. */
  issuedDate?: string
  credentialId?: string
  credentialUrl?: string
}

export type ProjectLink = {
  label: string
  href?: string
  type: 'github' | 'demo' | 'case' | 'private'
}

/** Maps a project to its generated UI illustration (see ProjectVisual). */
export type ProjectVisualKind =
  | 'reader'
  | 'documents'
  | 'people'
  | 'pos'
  | 'fleet'
  | 'registry'

export type Project = {
  id: string
  name: string
  /** Second name the product is known by, if any. */
  alias?: string
  category: string
  shortDescription: string
  technologies: string[]
  features: string[]
  status: 'public' | 'private'
  links: ProjectLink[]
  accent: string
  visual: ProjectVisualKind
  /** Featured projects render as large alternating case-study rows. */
  featured: boolean
  /** Optional real screenshot; falls back to the generated visual. */
  image?: { src: string; alt: string }
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

export type JourneyItem = {
  id: string
  title: string
  meta: string
  description: string
  tags: string[]
}

export type ExpertiseArea = {
  id: string
  title: string
  description: string
  icon: 'stack' | 'mobile' | 'systems' | 'database' | 'api' | 'automation'
}

export const about = {
  paragraphs: [
    'I’m a full-stack and mobile developer based in Kurdistan, Iraq. Most of my work starts the same way: an organization is running something important on paper, spreadsheets, or a tool that stopped fitting — and needs software shaped around how they actually work.',
    'I build the whole thing. The schema and data model, the API and business rules behind it, the interface people use every day, and the mobile client when the work happens away from a desk. React and React Native on the front, Node.js or Flask on the back, PostgreSQL or SQLite underneath.',
    'The systems I build tend to be the unglamorous kind that has to be correct: document workflows with real permission rules, personnel records inside an organizational hierarchy, a point-of-sale that talks to a barcode scanner and a label printer, registries whose data outlives the application. I care about schema design, clear ownership of data, and interfaces that don’t slow down the person using them.',
    'I also hold a Cisco CCNA, which earns its keep whenever a system has to run on someone else’s network instead of my laptop.',
  ],
  highlights: [
    'Full-stack web applications',
    'Cross-platform mobile apps',
    'REST APIs & backend logic',
    'Relational database design',
    'Offline-capable desktop tools',
  ],
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Applications',
    description:
      'Complete web applications — interface, backend, APIs and database designed as one system rather than glued together.',
    icon: 'stack',
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    description:
      'Cross-platform apps with React Native and Flutter, built for real devices, offline moments and non-English users.',
    icon: 'mobile',
  },
  {
    id: 'management',
    title: 'Management Systems',
    description:
      'Business, government, HR, document, inventory and registry platforms with roles, hierarchy and audit-friendly records.',
    icon: 'systems',
  },
  {
    id: 'database',
    title: 'Database Systems',
    description:
      'PostgreSQL and SQLite schema design, relationships, migrations and queries that stay fast as records accumulate.',
    icon: 'database',
  },
  {
    id: 'api',
    title: 'API & Backend Development',
    description:
      'REST APIs, authentication, permissions and business logic — the layer that decides what each user is allowed to do.',
    icon: 'api',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description:
      'Replacing manual workflows — paper forms, spreadsheets, repeated data entry — with processes the software handles.',
    icon: 'automation',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    caption: 'Interfaces',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    caption: 'Cross-platform',
    skills: ['React Native', 'Flutter', 'Dart'],
  },
  {
    id: 'backend',
    label: 'Backend',
    caption: 'APIs & logic',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs'],
  },
  {
    id: 'databases',
    label: 'Databases',
    caption: 'Data layer',
    skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Prisma', 'SQLAlchemy'],
  },
  {
    id: 'platform',
    label: 'Platform & Tools',
    caption: 'Ship & run',
    skills: ['Supabase', 'Railway', 'Cloudinary', 'Appwrite', 'Electron', 'Git', 'GitHub'],
  },
  {
    id: 'networking',
    label: 'Networking',
    caption: 'CCNA certified',
    skills: ['TCP/IP', 'Routing', 'Switching', 'Network troubleshooting'],
  },
]

/** Flat stack list for the hero ticker — real tools only, ordered for rhythm. */
export const marqueeTech = [
  'React',
  'React Native',
  'TypeScript',
  'Flutter',
  'Node.js',
  'PostgreSQL',
  'Python',
  'Flask',
  'Prisma',
  'Supabase',
  'SQLite',
  'REST APIs',
  'Electron',
  'Railway',
  'CCNA',
] as const

export const projects: Project[] = [
  {
    id: 'bijare',
    name: 'Bijare',
    alias: 'WorkHub',
    category: 'Mobile Application',
    shortDescription:
      'A book and knowledge platform for reading, listening and studying — audio books, chapter navigation, highlighting, short-form content and full Kurdish/English localization.',
    technologies: ['React Native', 'Flutter', 'Supabase', 'PostgreSQL', 'Audio', 'i18n'],
    features: [
      'Book discovery & categories',
      'Audio books with playback',
      'Chapter navigation',
      'Text highlighting',
      'Shorts-style content',
      'Search',
      'User authentication',
      'Kurdish / English localization',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private project', type: 'private' },
    ],
    accent: '#38bdf8',
    visual: 'reader',
    featured: true,
    caseStudy: {
      overview:
        'Bijare (also known as WorkHub) is a mobile-first reading platform built around books, summaries and audio. It covers the whole reading journey: finding something worth reading, moving through it chapter by chapter, listening when reading is not possible, and keeping the parts that mattered.',
      problem:
        'Readers in the region have very little quality material available in their own language, and general-purpose reading apps treat Kurdish as an afterthought — broken layouts, missing fonts, no localized content structure.',
      solution:
        'A mobile app where localization is part of the data model rather than a translation file bolted on at the end. Books, chapters and categories are stored as structured content, with audio, highlighting and short-form pieces as first-class reading modes.',
      architecture:
        'React Native and Flutter clients over Supabase, with PostgreSQL holding books, chapters, categories and localized fields. Authentication and media delivery run through Supabase; audio playback and reading state live on the client so the app stays responsive.',
      challenges: [
        'Supporting Kurdish and English without duplicating the content model or cluttering the interface',
        'Keeping audio playback smooth while the user browses and reads elsewhere in the app',
        'Making search and category browsing fast against a growing content library',
        'Balancing three reading modes — full chapters, summaries and shorts — in one coherent navigation',
      ],
      results: [
        'One app covering reading, listening and short-form learning',
        'Kurdish and English treated as equal first-class languages',
        'Content structured well enough to keep growing without a rewrite',
      ],
      screenshots: [],
    },
  },
  {
    id: 'document-management',
    name: 'Document Management System',
    category: 'Enterprise / Government System',
    shortDescription:
      'An organization-wide platform for documents, departments, users and internal workflows — with hierarchical departments, role-based permissions and digital signatures.',
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'REST API', 'Cloudinary'],
    features: [
      'Document management & archives',
      'Departments and sub-departments',
      'Hierarchical department structure',
      'User management',
      'Role-based permissions',
      'Internal document workflows',
      'Digital signatures',
      'Search',
      'Admin dashboard',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private project', type: 'private' },
    ],
    accent: '#4d7cff',
    visual: 'documents',
    featured: true,
    caseStudy: {
      overview:
        'A document management platform for organizations that move a high volume of internal paperwork between departments. It replaces physical routing and shared folders with tracked documents, explicit permissions and a searchable archive.',
      problem:
        'Documents lived in filing cabinets and scattered shared drives. Nobody could answer basic questions reliably: who holds this document now, who is allowed to see it, which version is current, and where did the signed copy go.',
      solution:
        'A central system where every document belongs to a department, carries an explicit permission set, and moves through defined internal workflows. Signing happens inside the system, and everything lands in a searchable archive.',
      architecture:
        'React front end talking to a Python/Flask REST API. PostgreSQL holds documents, departments, users and permissions — with departments modelled as a hierarchy so a sub-department inherits sensibly from its parent. Files are stored in cloud storage with metadata kept relational.',
      challenges: [
        'Designing a permission model that survives departments nested several levels deep',
        'Keeping the department hierarchy queryable without expensive recursive lookups on every request',
        'Handling mixed document and image assets under consistent access rules',
        'Making the signature and archive flow obvious to non-technical staff',
      ],
      results: [
        'Document operations centralized in one system instead of drives and cabinets',
        'Clear, enforceable ownership and access model across departments',
        'Searchable archive with signed documents retained in place',
      ],
      screenshots: [],
    },
  },
  {
    id: 'hrms',
    name: 'HRMS',
    category: 'Government / HR Management',
    shortDescription:
      'A human resource management system built around organizational hierarchy — employees, departments, personnel records and administrative workflows.',
    technologies: ['React', 'Node.js', 'REST API', 'PostgreSQL', 'Authentication'],
    features: [
      'Employee records',
      'Departments & sub-departments',
      'Organizational hierarchy',
      'Personnel files',
      'Administrative workflows',
      'Role-based permissions',
      'Dashboard',
      'Search & filtering',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private project', type: 'private' },
    ],
    accent: '#34d399',
    visual: 'people',
    featured: true,
    caseStudy: {
      overview:
        'A personnel management system for an organization with a deep administrative structure. The hierarchy is not decoration here — it determines who appears in whose list, who can act on a record, and how requests travel upward.',
      problem:
        'Personnel data was spread across spreadsheets that each department maintained separately. The org chart existed mainly in people’s heads, so anything crossing department lines required manual reconciliation.',
      solution:
        'A single system where the organizational hierarchy is modelled explicitly, employees attach to it, and administrative workflows follow the same structure. Permissions derive from position in the hierarchy rather than being assigned by hand.',
      architecture:
        'React dashboard over a Node.js REST API with token-based authentication. PostgreSQL stores employees, departments and sub-departments with the hierarchy as real relationships, keeping filtered views and searches efficient.',
      challenges: [
        'Modelling an org hierarchy that is deep, uneven, and occasionally reorganized',
        'Deriving permissions from structure without making common queries slow',
        'Search and filtering that stay fast across the full personnel set',
        'Keeping daily administrative screens quick for staff who live in them',
      ],
      results: [
        'Personnel records consolidated into one structured system',
        'Org hierarchy encoded in the data instead of institutional memory',
        'Administrative workflows that follow the real chain of responsibility',
      ],
      screenshots: [],
    },
  },
  {
    id: 'pos-inventory',
    name: 'POS & Inventory System',
    category: 'Business / Retail',
    shortDescription:
      'A point-of-sale and inventory platform built for counter speed — barcode scanning, fast checkout, stock tracking, receipt printing and Xprinter price labels.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Barcode', 'Thermal printing'],
    features: [
      'Product management',
      'Barcode scanning',
      'Cart & fast checkout',
      'Inventory tracking',
      'Receipt printing',
      'Xprinter label printing',
      'Price labels',
      'Backend & database architecture',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private project', type: 'private' },
    ],
    accent: '#e3b341',
    visual: 'pos',
    featured: true,
    caseStudy: {
      overview:
        'A point-of-sale and inventory system where the hard requirements were speed and hardware. A cashier with a queue in front of them will abandon any interface that makes them wait, and the system has to drive real scanners and printers rather than pretend they exist.',
      problem:
        'Checkout was slow and stock counts drifted from reality. Prices were labelled by hand, and inventory was only accurate immediately after someone counted it.',
      solution:
        'A checkout flow driven by the barcode scanner — scan, cart updates, print, done — with inventory decremented as part of the sale rather than as a separate step. Receipt and price-label printing run through the same system on Xprinter hardware.',
      architecture:
        'React client with a keyboard/scanner-driven checkout, a Node.js backend for products, sales and stock, and PostgreSQL holding the catalogue and transaction history. Printing uses direct thermal printer commands so receipts and labels come out correctly formatted.',
      challenges: [
        'Keeping the checkout responsive under rapid consecutive scans',
        'Driving Xprinter thermal hardware for both receipts and price labels',
        'Keeping stock counts consistent when sales, returns and adjustments overlap',
        'Designing an interface a cashier can operate without taking their hands off the scanner',
      ],
      results: [
        'Checkout driven by scanning rather than manual lookup',
        'Inventory that updates as a consequence of sales, not a separate chore',
        'Receipts and price labels printed directly from the system',
      ],
      screenshots: [],
    },
  },
  {
    id: 'vehicle-management',
    name: 'Vehicle Management System',
    category: 'Management System',
    shortDescription:
      'A vehicle registry and management application for fleet records, departments, types and expenses — built to keep working when the network does not.',
    technologies: ['React', 'Node.js', 'Prisma', 'SQLite', 'Electron'],
    features: [
      'Vehicle records',
      'Departments & vehicle types',
      'Expense tracking',
      'Search & filtering',
      'Management dashboard',
      'Local database persistence',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private project', type: 'private' },
    ],
    accent: '#4d7cff',
    visual: 'fleet',
    featured: false,
    caseStudy: {
      overview:
        'A management system for vehicle records and the administrative data around them — which department a vehicle belongs to, what type it is, and what it has cost.',
      problem:
        'Vehicle records and expenses were tracked informally, and the machines that needed the data could not depend on a stable network connection.',
      solution:
        'A structured registry with search and filtering, backed by a local database so the application stays usable regardless of connectivity.',
      architecture:
        'React interface with a Node.js layer over Prisma and SQLite, packaged for desktop with Electron so it runs locally without requiring an always-on server.',
      challenges: [
        'Offline-first workflows that still feel like a modern application',
        'Modelling vehicles, departments, types and expenses without over-complicating data entry',
        'Windows packaging and distribution',
      ],
      results: [
        'A single structured registry for vehicles and expenses',
        'Runs locally with no server dependency',
        'Fast search across the full record set',
      ],
      screenshots: [],
    },
  },
  {
    id: 'land-registry',
    name: 'Land Registry System',
    category: 'Registry / Government System',
    shortDescription:
      'A database-driven land registry for structured records, locations and ownership — designed for accurate data entry and fast search at scale.',
    technologies: ['React', 'Vite', 'Node.js', 'PostgreSQL'],
    features: [
      'Land records',
      'Locations & ownership',
      'Structured data entry',
      'Search & filtering',
      'Administration',
      'PostgreSQL data layer',
    ],
    status: 'private',
    links: [
      { label: 'Case Study', type: 'case' },
      { label: 'Private project', type: 'private' },
    ],
    accent: '#38bdf8',
    visual: 'registry',
    featured: false,
    caseStudy: {
      overview:
        'A registry application for land records — the locations, the parcels, and who owns what. Registry data is long-lived, so the schema matters more than the interface.',
      problem:
        'Land information needed accurate digital records with fast retrieval, in a domain where an inconsistent record is worse than a missing one.',
      solution:
        'A PostgreSQL schema for locations, parcels and ownership with registry CRUD and search built on top, and validation at entry rather than cleanup afterwards.',
      architecture:
        'React and Vite front end over a Node.js API, with PostgreSQL holding the registry and search-oriented queries for retrieval.',
      challenges: [
        'A schema that stays accurate as recorded fields evolve over time',
        'Referential integrity for ownership relationships',
        'Fast search and data entry over a large record set',
      ],
      results: [
        'Structured digital registry workflows',
        'Searchable, relationally consistent records',
        'A data model built to outlast the current interface',
      ],
      screenshots: [],
    },
  },
]

/**
 * Journey — independent/freelance work, described by the systems actually delivered.
 * No employers or dates are asserted here. Add real roles if that changes.
 */
export const journey: JourneyItem[] = [
  {
    id: 'freelance',
    title: 'Freelance Full-Stack & Mobile Developer',
    meta: 'Independent · Ongoing',
    description:
      'Working directly with businesses and organizations: scoping the requirement, designing the data model, building the front end, backend and mobile client, and delivering the system into daily use.',
    tags: ['React', 'React Native', 'Node.js', 'Flask', 'PostgreSQL'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Government Systems',
    meta: 'Document management · HRMS · Land registry',
    description:
      'Platforms built around organizational structure — hierarchical departments, role-based permissions, personnel and registry records, and internal workflows that follow the real chain of responsibility.',
    tags: ['Permissions', 'Hierarchy', 'REST APIs', 'PostgreSQL'],
  },
  {
    id: 'operations',
    title: 'Retail & Operations Software',
    meta: 'POS & inventory · Vehicle management',
    description:
      'Systems where performance and hardware are part of the requirement: barcode-driven checkout, thermal receipt and label printing, inventory that stays accurate, and offline-capable desktop tooling.',
    tags: ['Barcode', 'Thermal printing', 'SQLite', 'Electron'],
  },
  {
    id: 'mobile-products',
    title: 'Mobile Products',
    meta: 'Bijare / WorkHub',
    description:
      'Cross-platform mobile development with React Native and Flutter, including audio playback, offline-friendly reading state and Kurdish/English localization built into the content model.',
    tags: ['React Native', 'Flutter', 'Supabase', 'i18n'],
  },
  {
    id: 'networking',
    title: 'Networking',
    meta: 'Cisco CCNA certified',
    description:
      'Formal networking foundation — routing, switching, TCP/IP and troubleshooting — which matters whenever a system has to be deployed onto a client’s own infrastructure.',
    tags: ['CCNA', 'TCP/IP', 'Routing', 'Switching'],
  },
]

export const certifications: Certification[] = [
  {
    id: 'ccna',
    name: 'CCNA',
    issuer: 'Cisco',
    description:
      'Cisco Certified Network Associate — the official Cisco certification covering network fundamentals, IP connectivity, routing and switching, security basics and troubleshooting.',
    topics: [
      'Network fundamentals',
      'IP connectivity',
      'Routing & switching',
      'Network access',
      'Security fundamentals',
      'Troubleshooting',
    ],
  },
]

export const contact = {
  heading: 'Let’s work together',
  lead: 'If you have a system to build — a web platform, a mobile app, or an internal tool your team is outgrowing — send me the details and I’ll tell you honestly whether I’m the right person for it.',
  availability: 'Available for freelance and contract work',
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const
