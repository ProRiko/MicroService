import type { IndustryKey, TemplateContent } from '@/types/content';

export interface ClientBlueprint {
  industry: IndustryKey;
  slug: string;
  label: string;
  content: TemplateContent;
}

export function createClientBlueprint(content: TemplateContent, label: string): ClientBlueprint {
  return {
    industry: content.key,
    slug: `/demo/${content.key}`,
    label,
    content
  };
}
