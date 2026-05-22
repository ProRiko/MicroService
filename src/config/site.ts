import type { NavItem, SeoConfig } from '@/types/content';

export const siteConfig = {
  name: 'Local Business Template Engine',
  description:
    'A reusable Next.js template system for rapidly launching premium local business websites.',
  url: 'https://local-business-template-engine.example',
  locale: 'en-US'
};

export const defaultSeo: SeoConfig = {
  title: 'Local Business Template Engine',
  description: siteConfig.description,
  keywords: ['local business websites', 'Next.js templates', 'agency system', 'SEO']
};

export const defaultNavigation: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];
