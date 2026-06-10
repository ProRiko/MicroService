import type { NavItem, SeoConfig } from '@/types/content';

export const siteConfig = {
  name: 'MicroService',
  description:
    'A multi-tenant business operating platform for small businesses to manage their online presence, customers, and appointments.',
  url: 'https://microservice.example',
  locale: 'en-US'
};

export const defaultSeo: SeoConfig = {
  title: 'MicroService',
  description: siteConfig.description,
  keywords: ['small business software', 'multi-tenant SaaS', 'customer management', 'appointments', 'business dashboard']
};

export const defaultNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'CRM', href: '/dashboard/customers' },
  { label: 'Bookings', href: '/dashboard/appointments' },
  { label: 'Website', href: '/dashboard/content' }
];
