import { createMetadata } from '@/config/metadata';
import { buildSchema } from '@/lib/seo';
import type { TemplateContent } from '@/types/content';
import type { ClientBlueprint } from '../clients';

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function createClientConfig(content: TemplateContent, label?: string): ClientBlueprint {
  const safeLabel = label ?? content.brand.name ?? content.key;
  const slug = `/client/${slugify(safeLabel)}`;

  return {
    industry: content.key,
    slug,
    label: safeLabel,
    content
  } as ClientBlueprint;
}

export function generateClientMetadata(content: TemplateContent) {
  return createMetadata(content.seo);
}

export function generateNavigationFromContent(content: TemplateContent) {
  const base = [{ label: 'Home', href: '/' }];
  const sections = [
    'services',
    'testimonials',
    'pricing',
    'gallery',
    'faq',
    'contact'
  ];

  const items = sections
    .filter((s) => !!(content as any)[s])
    .map((s) => ({ label: (s.charAt(0).toUpperCase() + s.slice(1)), href: `#${s}` }));

  return base.concat(items);
}

export function generateClientSchema(content: TemplateContent) {
  return buildSchema(content);
}

export function generateCTAs(content: TemplateContent) {
  const ctas = [] as any[];
  if (content.hero?.primaryCta) ctas.push(content.hero.primaryCta);
  if (content.hero?.secondaryCta) ctas.push(content.hero.secondaryCta);
  if (content.cta) ctas.push(content.cta);
  return ctas;
}

export default { createClientConfig, generateClientMetadata, generateNavigationFromContent };
