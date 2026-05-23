import type { IndustryKey, ThemeConfig } from '@/types/content';

export interface IndustryPreset {
  key: IndustryKey;
  recommendedSections: string[];
  themeDefaults?: Partial<ThemeConfig>;
  conversionPriority?: string[];
}

export const industryPresets: Record<IndustryKey, IndustryPreset> = {
  gym: {
    key: 'gym',
    recommendedSections: ['hero', 'services', 'testimonials', 'pricing', 'cta'],
    conversionPriority: ['booking', 'whatsapp', 'trial-signup']
  },
  cafe: {
    key: 'cafe',
    recommendedSections: ['hero', 'menu', 'gallery', 'testimonials', 'cta'],
    conversionPriority: ['menu', 'reserve', 'whatsapp']
  },
  restaurant: {
    key: 'restaurant',
    recommendedSections: ['hero', 'menu', 'gallery', 'pricing', 'cta'],
    conversionPriority: ['reserve', 'menu', 'reviews']
  },
  salon: {
    key: 'salon',
    recommendedSections: ['hero', 'services', 'gallery', 'testimonials', 'cta'],
    conversionPriority: ['booking', 'whatsapp', 'promotions']
  },
  spa: {
    key: 'spa',
    recommendedSections: ['hero', 'services', 'testimonials', 'pricing', 'cta'],
    conversionPriority: ['booking', 'packages', 'trust']
  },
  hotel: {
    key: 'hotel',
    recommendedSections: ['hero', 'rooms', 'gallery', 'testimonials', 'cta'],
    conversionPriority: ['booking', 'availability', 'reviews']
  },
  clinic: {
    key: 'clinic',
    recommendedSections: ['hero', 'services', 'testimonials', 'contact', 'cta'],
    conversionPriority: ['appointment', 'contact', 'trust']
  }
};

export function getPreset(key: IndustryKey) {
  return industryPresets[key];
}

const industryPresetConfig = { industryPresets, getPreset };

export default industryPresetConfig;
