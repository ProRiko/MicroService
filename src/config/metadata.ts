import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import type { SeoConfig } from '@/types/content';

export function createMetadata(seo?: Partial<SeoConfig>): Metadata {
  const title = seo?.title ?? siteConfig.name;
  const description = seo?.description ?? siteConfig.description;
  const canonicalPath = seo?.canonicalPath ?? '/';
  const keywords = seo?.keywords;
  const canonicalUrl = new URL(canonicalPath, siteConfig.url).toString();
  const openGraphImage = seo?.openGraphImage ? new URL(seo.openGraphImage, siteConfig.url).toString() : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
      absolute: title
    },
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: openGraphImage ? [openGraphImage] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: openGraphImage ? [openGraphImage] : undefined
    }
  };
}
