import { CaseStudy, Capability, Testimonial, FAQItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_studio_showcase_1793276231079.jpg';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aura-capital',
    title: 'Aura Capital',
    client: 'Aura Asset Management',
    category: 'fintech',
    categoryLabel: 'Financial Technology',
    year: '2026',
    headline: 'High-Frequency Portfolio Intelligence Terminal',
    summary: 'A sub-100ms real-time financial intelligence interface handling $2.4B in private equity and quantitative hedge fund allocations.',
    image: '/src/assets/images/case_study_fintech_1793276230164.jpg',
    metrics: [
      { label: 'Latency Drop', value: '< 65ms', context: 'From 1,200ms legacy queries' },
      { label: 'Active Retention', value: '+310%', context: 'Institutional analyst daily logins' },
      { label: 'Capital Monitored', value: '$2.4B', context: 'Tracked across 14 asset classes' },
    ],
    challenge: 'Aura’s legacy Bloomberg-style analytical portal suffered from 1.5s rendering lags, fragmented data silos, and an archaic user experience that alienated next-generation fund managers.',
    solution: 'We engineered a bespoke, hardware-accelerated charting architecture powered by WebGL and lightweight WebSocket streaming, complemented by a minimalist high-contrast theme and keyboard-first command palette.',
    techStack: ['React 19', 'TypeScript', 'WebGL Canvas', 'Tailwind CSS', 'High-Frequency WebSockets', 'PostgreSQL'],
    quote: {
      text: 'Kroma did not just redesign our frontend—they rebuilt how our quantitative researchers interpret volatility in market open windows.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aura Asset Management',
    },
  },
  {
    id: 'veloce-electric',
    title: 'Veloce Mobility',
    client: 'Veloce Automotive Group',
    category: 'mobility',
    categoryLabel: 'Electric Mobility',
    year: '2026',
    headline: 'Flagship Digital Vehicle Configurator & Fleet Portal',
    summary: 'An interactive 3D digital vehicle experience and global reservation pipeline spanning 18 European and North American markets.',
    image: '/src/assets/images/case_study_mobility_1793276231184.jpg',
    metrics: [
      { label: 'Conversion Jump', value: '4.2x', context: 'Qualified test drive reservations' },
      { label: 'Funnel Abandonment', value: '-68%', context: 'Reduced drop-off across bespoke steps' },
      { label: 'Global Availability', value: '18 Markets', context: 'Simultaneous international launch' },
    ],
    challenge: 'Veloce was unveiling their premier electric gran turismo model, requiring a showroom-grade digital configurator capable of rendering photorealistic custom trims in mobile browsers without battery drain or lag.',
    solution: 'We built a custom progressive rendering pipeline combining WebGL pre-bakes with instant client-side customization, integrated with an enterprise inventory allocation engine and regional dealer routing.',
    techStack: ['Three.js', 'React 19', 'Tailwind CSS', 'Next.js Runtime', 'Headless Stripe & FinTech API'],
    quote: {
      text: 'Our online reservation volume exceeded annual projections within the first forty-eight hours of launch. The fidelity is unmatched.',
      author: 'Elena Rostova',
      role: 'Head of Global Digital Experience',
      company: 'Veloce Automotive Group',
    },
  },
  {
    id: 'atelier-acoustic',
    title: 'Atelier Acoustic',
    client: 'Atelier Soundworks Denmark',
    category: 'commerce',
    categoryLabel: 'Luxury Audio & Retail',
    year: '2025',
    headline: 'Immersive Spatial Commerce for High-Fidelity Audio',
    summary: 'An editorial luxury flagship platform celebrating Danish acoustic craftsmanship with interactive sound chamber simulations.',
    image: '/src/assets/images/case_study_lifestyle_1793276231682.jpg',
    metrics: [
      { label: 'Average Order Value', value: '+185%', context: 'Subscribers upgrading to custom wood finishes' },
      { label: 'Lighthouse Performance', value: '99.8', context: 'Across mobile and desktop audits' },
      { label: 'Cart Conversion', value: '+42%', context: 'Frictionless two-tap checkout checkout' },
    ],
    challenge: 'Premium acoustic systems are sensory investments. Selling $3,500 loudspeakers online without tactile physical demonstration presented high buyer hesitation.',
    solution: 'We crafted an ambient sound visualization tool that allows customers to simulate acoustic room dispersion, paired with tactile macro-photography interactions and instant concierge ordering.',
    techStack: ['Web Audio API', 'React 19', 'Tailwind CSS', 'Shopify Storefront API', 'Motion'],
    quote: {
      text: 'Kroma achieved what our previous agency said was impossible: conveying sonic depth and Danish heritage purely through a browser viewport.',
      author: 'Soren Lindqvist',
      role: 'Founder & Design Director',
      company: 'Atelier Soundworks',
    },
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'architecture',
    index: '01',
    title: 'Digital Product Architecture',
    subtitle: 'Strategic foundation & user systems',
    description: 'We turn ambiguous product challenges into clear system specifications, interactive UX wireframes, and scalable information architectures.',
    deliverables: [
      'Interactive Figma prototypes',
      'User journey & conversion mapping',
      'System requirement specifications',
      'Technical feasibility audits'
    ],
    technologies: ['Figma', 'System Modeling', 'User Research', 'Information Architecture'],
    colSpan: 'md:col-span-2',
  },
  {
    id: 'engineering',
    index: '02',
    title: 'Full-Stack Web Engineering',
    subtitle: 'Modern standards & high-concurrency',
    description: 'Battle-tested web applications engineered with modern React, TypeScript, edge runtimes, and sub-second data synchronization.',
    deliverables: [
      'Responsive React / SPA platforms',
      'Real-time WebSocket & API engines',
      'Database schema & state management',
      'Micro-service integration'
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    colSpan: 'md:col-span-1',
  },
  {
    id: 'design-systems',
    index: '03',
    title: 'Living Design Systems',
    subtitle: 'Tokenized component architecture',
    description: 'Harmonious component libraries that eliminate design debt, ensure brand fidelity, and speed up future feature releases tenfold.',
    deliverables: [
      'Accessible UI component libraries',
      'Design token architectures (CSS/JSON)',
      'Documentation & Storybook catalogs',
      'Cross-platform typography systems'
    ],
    technologies: ['Tailwind CSS', 'Storybook', 'WCAG AA', 'Design Tokens'],
    colSpan: 'md:col-span-1',
  },
  {
    id: 'performance',
    index: '04',
    title: 'Performance & Scalability',
    subtitle: 'Sub-second loads & Core Web Vitals',
    description: 'We optimize every millisecond of critical render path, asset pipeline, and server response time to maximize conversion and search authority.',
    deliverables: [
      'Core Web Vitals 99+ remediation',
      'Edge caching & asset compression',
      'Accessibility & keyboard navigation audits',
      'Security posture & penetration reviews'
    ],
    technologies: ['Lighthouse', 'Edge CDN', 'Bundle Optimization', 'Core Web Vitals'],
    colSpan: 'md:col-span-2',
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Strategic Blueprint',
    duration: 'Weeks 1–2',
    description: 'We align on business goals, technical constraints, user mental models, and establish high-fidelity information architectures.',
    deliverables: ['Stakeholder alignment brief', 'Technical stack recommendations', 'Full sitemap & user flows', 'Foundational moodboards'],
  },
  {
    step: '02',
    title: 'Interactive Prototyping',
    duration: 'Weeks 3–4',
    description: 'Every key screen is designed and prototyped with interactive micro-animations and typography scales for stakeholder signoff.',
    deliverables: ['Design token library', 'Responsive mobile & desktop views', 'Interactive click-through prototype', 'Content strategy review'],
  },
  {
    step: '03',
    title: 'Production Engineering',
    duration: 'Weeks 5–8',
    description: 'Our engineering team writes clean, modular, typed TypeScript code with end-to-end integration and rigorous automated checks.',
    deliverables: ['Modular component repository', 'API & database integration', 'Weekly staging preview deployments', 'Accessibility compliance validation'],
  },
  {
    step: '04',
    title: 'Launch & Performance SLA',
    duration: 'Weeks 9+',
    description: 'We execute smooth domain cutovers, configure CDN edge rules, monitor real-user telemetry, and provide 60 days of guaranteed hyper-care.',
    deliverables: ['Zero-downtime deployment', 'Core Web Vitals verification', 'Comprehensive handoff documentation', 'Post-launch analytics verification'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Kroma delivered our new client dashboard two weeks ahead of schedule. The speed, aesthetic restraint, and clean code have set a new benchmark for our in-house engineering team.',
    beforeAfter: 'Replaced a slow 4-year legacy portal with a sub-second reactive workspace.',
    author: 'Clara Johansson',
    role: 'VP of Product',
    company: 'Nordic Horizon Capital',
    impactMetric: '+240% Daily active engagement',
  },
  {
    id: '2',
    quote: 'Working with Kroma felt like having the top 1% of Silicon Valley design engineers embedded in our team. Their craftsmanship directly accelerated our Series B fundraising round.',
    beforeAfter: 'Scaled digital conversions from $300k/mo to $1.8M/mo within two quarters.',
    author: 'Julian Thorne',
    role: 'Co-Founder & CEO',
    company: 'Synapse Mobility Systems',
    impactMetric: '$14.2M Series B secured',
  },
  {
    id: '3',
    quote: 'No fluff, no endless committee meetings—just pristine design execution and bulletproof engineering. They understand both business ROI and aesthetic subtlety.',
    beforeAfter: 'Consolidated three disjointed brand properties into a unified design system.',
    author: 'Sarah Chen',
    role: 'Head of Global Brand',
    company: 'Loomis Architecture Group',
    impactMetric: '68% Reduction in design tech debt',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do project engagements typically work?',
    answer: 'We operate in focused, sprint-based cycles—typically 6 to 12 weeks for end-to-end digital platforms. Every project begins with a 2-week blueprint phase followed by iterative weekly staging builds with direct access to senior engineers.',
  },
  {
    question: 'Who owns the intellectual property and code repository?',
    answer: 'You own 100% of all intellectual property, design tokens, Figma files, and Git repositories upon project completion. We do not hold proprietary code hostage.',
  },
  {
    question: 'What technology stack do you specialize in?',
    answer: 'We specialize in modern web ecosystems: React 19, TypeScript, Tailwind CSS, Next.js, Node.js, Express, PostgreSQL, WebSockets, Three.js, and edge deployment architectures like Cloud Run and Cloudflare Workers.',
  },
  {
    question: 'Do you offer ongoing maintenance and feature development?',
    answer: 'Yes. Every deployment includes 60 days of comprehensive hyper-care and warranty. Afterwards, clients can engage our Dedicated Studio Retainer for continuous feature iteration or hand off to internal teams with our structured documentation.',
  },
  {
    question: 'How quickly can we start?',
    answer: 'We maintain a strict cap of 3 concurrent active client projects to guarantee senior partner attention. New engagements typically kick off within 10 to 14 business days following contract execution.',
  },
];
