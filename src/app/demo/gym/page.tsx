import type { Metadata } from 'next';

import { createMetadata } from '@/config/metadata';
import { gymTemplateContent } from '@/content/demo/gym';
import { GymTemplate } from '@/templates/fitness';

export const metadata: Metadata = createMetadata(gymTemplateContent.seo);

export default function GymDemoPage() {
  return <GymTemplate content={gymTemplateContent} />;
}
