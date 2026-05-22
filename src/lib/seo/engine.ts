import { createMetadata } from '@/config/metadata';
import { buildSchema } from '@/lib/seo';
import clientRegistry from '@/config/clients/registry';
import type { TemplateContent } from '@/types/content';

type ClientContent = TemplateContent;

export function metadataForClient(content: ClientContent) {
  return createMetadata(content.seo);
}

export function jsonLdForClient(content: ClientContent) {
  return buildSchema(content);
}


export function sitemapEntriesForClients() {
  const clients = clientRegistry.listClients();

  return clients.map((c) => ({
    url: c.slug,
    lastModified: new Date().toISOString(),
  }));
}

const seoEngine = {
  metadataForClient,
  jsonLdForClient,
  sitemapEntriesForClients,
};

export default seoEngine;