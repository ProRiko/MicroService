import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { ClientBlueprint } from '../clients';

const DATA_FILE = resolve(process.cwd(), 'data', 'clients.json');

function ensureDir(path: string) {
  const dir = dirname(path);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

export function loadPersistentClients(): ClientBlueprint[] {
  try {
    if (!existsSync(DATA_FILE)) return [];
    const raw = readFileSync(DATA_FILE, { encoding: 'utf8' });
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as ClientBlueprint[];
  } catch (error) {
    console.warn('Failed to load persistent clients', error);
    return [];
  }
}

export function savePersistentClients(items: ClientBlueprint[]) {
  try {
    ensureDir(DATA_FILE);
    writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), { encoding: 'utf8' });
  } catch (error) {
    console.warn('Failed to save persistent clients', error);
  }
}

export function appendPersistentClient(item: ClientBlueprint) {
  const items = loadPersistentClients();
  const exists = items.find((i) => i.slug === item.slug);
  if (exists) return;
  items.push(item);
  savePersistentClients(items);
}

export function removePersistentClient(slug: string) {
  const items = loadPersistentClients();
  const filtered = items.filter((i) => i.slug !== slug);
  savePersistentClients(filtered);
}

const persistentClientStore = { loadPersistentClients, savePersistentClients, appendPersistentClient, removePersistentClient };

export default persistentClientStore;
