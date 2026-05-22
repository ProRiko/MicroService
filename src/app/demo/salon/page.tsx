import type { Metadata } from 'next';

import { createMetadata } from '@/config/metadata';
import { salonTemplateContent } from '@/content/demo/salon';
import { BeautyTemplate } from '@/templates/beauty';

export const metadata: Metadata = createMetadata(salonTemplateContent.seo);

export default function SalonDemoPage() {
  return <BeautyTemplate content={salonTemplateContent} />;
}
