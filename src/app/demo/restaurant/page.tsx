import type { Metadata } from 'next';

import { createMetadata } from '@/config/metadata';
import { restaurantTemplateContent } from '@/content/demo/restaurant';
import { FoodBusinessTemplate } from '@/templates/food';

export const metadata: Metadata = createMetadata(restaurantTemplateContent.seo);

export default function RestaurantDemoPage() {
  return <FoodBusinessTemplate content={restaurantTemplateContent} />;
}
