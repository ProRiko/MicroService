import type { ClientBlueprint } from '../clients';
import persistent from './persistent';

const registry = new Map<string, ClientBlueprint>();

// Initialize from persistent storage
try {
  const persisted = persistent.loadPersistentClients();
  for (const p of persisted) registry.set(p.slug, p);
} catch {
  // ignore
}

export function registerClient(blueprint: ClientBlueprint, persist = true) {
  registry.set(blueprint.slug, blueprint);
  if (persist) {
    try {
      persistent.appendPersistentClient(blueprint);
    } catch {
      // ignore
    }
  }
}

export function unregisterClient(slug: string) {
  registry.delete(slug);
  try {
    persistent.removePersistentClient(slug);
  } catch {
    // ignore
  }
}

export function getClient(slug: string) {
  return registry.get(slug);
}

export function listClients() {
  return Array.from(registry.values());
}

export function clearRegistry() {
  registry.clear();
}

const clientRegistryApi = {
  registerClient,
  unregisterClient,
  getClient,
  listClients,
  clearRegistry
};

export default clientRegistryApi;
