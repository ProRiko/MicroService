import type { Metadata } from 'next';

import { createMetadata } from '@/config/metadata';
import { cafeTemplateContent } from '@/content/demo/cafe';
import { FoodBusinessTemplate } from '@/templates/food';

export const metadata: Metadata = createMetadata(cafeTemplateContent.seo);

export default function CafeDemoPage() {
  return <FoodBusinessTemplate content={cafeTemplateContent} />;
}
