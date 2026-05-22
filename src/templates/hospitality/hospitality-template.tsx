import { IndustryTemplate } from '@/templates/shared/industry-template';
import type { TemplateContent } from '@/types/content';

interface HospitalityTemplateProps {
  content: TemplateContent;
}

export function HospitalityTemplate({ content }: HospitalityTemplateProps) {
  return (
    <IndustryTemplate
      content={content}
      sectionOrder={['services', 'gallery', 'reviews', 'pricing', 'booking', 'socialProof', 'hours', 'faq', 'contact', 'map', 'cta']}
    />
  );
}
