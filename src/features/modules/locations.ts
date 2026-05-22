import type { Location } from '@/types/content';

export function primaryLocation(locations?: Location[]) {
  if (!locations || locations.length === 0) return null;
  return locations[0];
}

export default { primaryLocation };
