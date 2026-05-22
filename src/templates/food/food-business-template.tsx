import { IndustryTemplate } from '@/templates/shared/industry-template';
import type { IndustrySectionKey } from '@/templates/shared/industry-template';
import type { TemplateContent } from '@/types/content';

interface FoodBusinessTemplateProps {
  content: TemplateContent;
}

export function FoodBusinessTemplate({ content }: FoodBusinessTemplateProps) {
  const sectionOrder: IndustrySectionKey[] =
    content.key === 'restaurant'
      ? ['services', 'reviews', 'gallery', 'pricing', 'booking', 'socialProof', 'hours', 'faq', 'contact', 'map', 'cta']
      : ['services', 'gallery', 'reviews', 'hours', 'pricing', 'socialProof', 'booking', 'faq', 'contact', 'map', 'cta'];

  return (
    <IndustryTemplate
      content={content}
      sectionOrder={sectionOrder}
    />
  );
}
