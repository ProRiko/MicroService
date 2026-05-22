import { IndustryTemplate } from '@/templates/shared/industry-template';
import type { TemplateContent } from '@/types/content';

interface FitnessTemplateProps {
  content: TemplateContent;
}

export function FitnessTemplate({ content }: FitnessTemplateProps) {
  return (
    <IndustryTemplate
      content={content}
      sectionOrder={['services', 'reviews', 'transformation', 'gallery', 'pricing', 'booking', 'hours', 'socialProof', 'faq', 'contact', 'map', 'cta']}
    />
  );
}
