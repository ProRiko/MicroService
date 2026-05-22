import type { ClientBlueprint } from '../clients';
import persistent from './persistent';

const registry = new Map<string, ClientBlueprint>();

// Initialize from persistent storage
try {
  const persisted = persistent.loadPersistentClients();
  for (const p of persisted) registry.set(p.slug, p);
} catch (err) {
  // ignore
}

export function registerClient(blueprint: ClientBlueprint, persist = true) {
  registry.set(blueprint.slug, blueprint);
  if (persist) {
    try {
      persistent.appendPersistentClient(blueprint);
    } catch (err) {
      // ignore
    }
  }
}

export function unregisterClient(slug: string) {
  registry.delete(slug);
  try {
    persistent.removePersistentClient(slug);
  } catch (err) {
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

export default {
  registerClient,
  unregisterClient,
  getClient,
  listClients,
  clearRegistry
};
