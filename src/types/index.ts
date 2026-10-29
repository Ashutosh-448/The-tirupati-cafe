export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'fintech' | 'mobility' | 'commerce' | 'all';
  categoryLabel: string;
  year: string;
  headline: string;
  summary: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  challenge: string;
  solution: string;
  techStack: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  colSpan?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  beforeAfter: string;
  author: string;
  role: string;
  company: string;
  impactMetric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
