import { createMetadata } from '@/config/metadata';
import { buildSchema } from '@/lib/seo';
import clientRegistry from '@/config/clients/registry';

type ClientContent = {
  seo?: Record<string, unknown>;
  [key: string]: unknown;
};

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

export default {
  metadataForClient,
  jsonLdForClient,
  sitemapEntriesForClients,
};