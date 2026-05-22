import clientRegistry from './registry';
import { loadPersistentClients } from './persistent';
import getDemoBlueprints from './seed';

let bootstrapped = false;

export function bootstrapClientRegistry() {
  if (bootstrapped) return clientRegistry;

  for (const client of loadPersistentClients()) {
    clientRegistry.registerClient(client, false);
  }

  for (const demo of getDemoBlueprints()) {
    clientRegistry.registerClient(demo, false);
  }

  bootstrapped = true;
  return clientRegistry;
}

export default bootstrapClientRegistry;
