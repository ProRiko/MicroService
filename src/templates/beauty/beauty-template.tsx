import { IndustryTemplate } from '@/templates/shared/industry-template';
import type { TemplateContent } from '@/types/content';

interface BeautyTemplateProps {
  content: TemplateContent;
}

export function BeautyTemplate({ content }: BeautyTemplateProps) {
  return (
    <IndustryTemplate
      content={content}
      sectionOrder={['services', 'transformation', 'gallery', 'reviews', 'pricing', 'socialProof', 'booking', 'hours', 'faq', 'contact', 'map', 'cta']}
    />
  );
}
