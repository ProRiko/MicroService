import type { TemplateContent } from '@/types/content';
import { siteConfig } from '@/config/site';

export function buildSchema(content: TemplateContent) {
  const canonicalUrl = new URL(content.seo.canonicalPath ?? '/', siteConfig.url).toString();
  const base = {
    '@context': 'https://schema.org',
    name: content.brand.name,
    description: content.seo.description,
    url: canonicalUrl,
    telephone: content.brand.phone,
    email: content.brand.email,
    sameAs: content.business?.socials?.map((social) => social.href)
  };

  if (content.key === 'restaurant') {
    return {
      ...base,
      '@type': 'Restaurant',
      servesCuisine: content.brand.tagLine,
      telephone: content.brand.phone,
      address: content.brand.address,
      openingHours: content.brand.hours
    };
  }

  if (content.key === 'hotel') {
    return {
      ...base,
      '@type': 'Hotel',
      telephone: content.brand.phone,
      address: content.brand.address,
      checkinTime: '15:00',
      checkoutTime: '11:00'
    };
  }

  return {
    ...base,
    '@type': 'LocalBusiness',
    telephone: content.brand.phone,
    address: content.brand.address,
    openingHours: content.brand.hours
  };
}
