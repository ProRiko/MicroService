import type { Metadata } from 'next';

import { createMetadata } from '@/config/metadata';
import { hotelTemplateContent } from '@/content/demo/hotel';
import { HospitalityTemplate } from '@/templates/hospitality';

export const metadata: Metadata = createMetadata(hotelTemplateContent.seo);

export default function HotelDemoPage() {
  return <HospitalityTemplate content={hotelTemplateContent} />;
}
