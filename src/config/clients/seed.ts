import { createClientBlueprint } from '../clients';
import type { ClientBlueprint } from '../clients';
import { gymTemplateContent } from '@/content/demo/gym';
import { cafeTemplateContent } from '@/content/demo/cafe';
import { restaurantTemplateContent } from '@/content/demo/restaurant';
import { salonTemplateContent } from '@/content/demo/salon';
import { hotelTemplateContent } from '@/content/demo/hotel';

const demos = [
  { content: gymTemplateContent, label: 'Gym Demo' },
  { content: cafeTemplateContent, label: 'Cafe Demo' },
  { content: restaurantTemplateContent, label: 'Restaurant Demo' },
  { content: salonTemplateContent, label: 'Salon Demo' },
  { content: hotelTemplateContent, label: 'Hotel Demo' }
]

export function getDemoBlueprints(): ClientBlueprint[] {
  return demos.map((demo) => createClientBlueprint(demo.content, demo.label));
}

export default getDemoBlueprints;
