import clientRegistry from '@/config/clients/registry';

export async function getClientBySlug(slug: string) {
  const clients = clientRegistry.listClients();
  return clients.find((c) => c.slug.endsWith(`/${slug}`)) ?? null;
}

export async function listClients() {
  return clientRegistry.listClients();
}

const localCmsAdapter = { getClientBySlug, listClients };

export default localCmsAdapter;
