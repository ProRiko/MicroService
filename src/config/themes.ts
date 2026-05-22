import type { IndustryKey, ThemeConfig } from '@/types/content';

export const industryThemes: Record<IndustryKey, ThemeConfig> = {
  gym: {
    name: 'Forge',
    primary: '#0a0a0b',
    accent: '#ff4d1a',
    gradient: 'from-black via-zinc-950 to-orange-950',
    mood: 'energetic'
  },
  cafe: {
    name: 'Roast',
    primary: '#5b341f',
    accent: '#c0843d',
    gradient: 'from-stone-950 via-amber-950 to-orange-950',
    mood: 'warm'
  },
  restaurant: {
    name: 'Table',
    primary: '#7c2d12',
    accent: '#f97316',
    gradient: 'from-red-950 via-amber-950 to-stone-950',
    mood: 'warm'
  },
  salon: {
    name: 'Glow',
    primary: '#701a75',
    accent: '#ec4899',
    gradient: 'from-fuchsia-950 via-rose-950 to-slate-950',
    mood: 'luxury'
  },
  spa: {
    name: 'Calm',
    primary: '#164e63',
    accent: '#14b8a6',
    gradient: 'from-cyan-950 via-slate-950 to-teal-950',
    mood: 'calm'
  },
  hotel: {
    name: 'Harbor',
    primary: '#1e293b',
    accent: '#d4af37',
    gradient: 'from-slate-950 via-slate-900 to-amber-950',
    mood: 'luxury'
  },
  clinic: {
    name: 'Care',
    primary: '#0f766e',
    accent: '#06b6d4',
    gradient: 'from-cyan-950 via-teal-950 to-slate-950',
    mood: 'calm'
  }
};

export function getIndustryTheme(key: IndustryKey) {
  return industryThemes[key];
}
