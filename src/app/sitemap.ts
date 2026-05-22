import type { MetadataRoute } from 'next';

import { siteConfig, bootstrapClientRegistry, getStaticRoutePaths } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = getStaticRoutePaths().map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8
  } as MetadataRoute.Sitemap[number]));

  const clients: MetadataRoute.Sitemap = bootstrapClientRegistry().listClients().map((c) => ({
    url: `${siteConfig.url}${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  } as MetadataRoute.Sitemap[number]));

  return base.concat(clients);
}