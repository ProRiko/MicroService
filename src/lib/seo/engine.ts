import { createMetadata } from '@/config/metadata';
import { buildSchema } from '@/lib/seo';
import clientRegistry from '@/config/clients/registry';

export function metadataForClient(content: any) {
  return createMetadata(content.seo);
}

export function jsonLdForClient(content: any) {
  return buildSchema(content);
}

export function sitemapEntriesForClients() {
  const clients = clientRegistry.listClients();
  return clients.map((c) => ({ url: c.slug, lastModified: new Date().toISOString() }));
}

export default { metadataForClient, jsonLdForClient, sitemapEntriesForClients };
