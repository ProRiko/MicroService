import type { Location } from '@/types/content';

export function primaryLocation(locations?: Location[]) {
  if (!locations || locations.length === 0) return null;
  return locations[0];
}

const locationsModule = { primaryLocation };

export default locationsModule;
