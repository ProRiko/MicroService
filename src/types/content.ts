export type IndustryKey = 'gym' | 'cafe' | 'salon' | 'spa' | 'restaurant' | 'hotel' | 'clinic';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  openGraphImage?: string;
}

export interface BrandConfig {
  name: string;
  tagLine: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStatsItem {
  value: string;
  label: string;
}

export interface HeroMedia {
  image: string;
  alt: string;
  caption?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  avatar?: string;
}

export interface PricingItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export interface GalleryItem {
  title: string;
  description?: string;
  tone: 'light' | 'dark' | 'accent';
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface MapConfig {
  title: string;
  address: string;
  embedUrl?: string;
}

export interface CtaConfig {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface ThemeConfig {
  name: string;
  primary: string;
  accent: string;
  gradient: string;
  mood: 'calm' | 'energetic' | 'luxury' | 'warm';
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface BusinessProfile {
  type: 'local-business' | 'restaurant' | 'hotel';
  whatsapp?: string;
  bookingHref?: string;
  instagramHref?: string;
  socials?: SocialLink[];
}

export interface Location {
  id: string;
  label: string;
  address: string;
  phone?: string;
  mapsUrl?: string;
  hours?: string;
}

export interface BookingConfig {
  provider?: string;
  href?: string;
  instructions?: string;
}

export interface OfferItem {
  id: string;
  title: string;
  description?: string;
  promoCode?: string;
  validFrom?: string;
  validTo?: string;
}

export interface ReviewAggregate {
  ratingValue: number;
  ratingCount: number;
}

export interface TrustBadgeItem {
  label: string;
  detail?: string;
}

export interface ProofItem {
  label: string;
  value: string;
  description?: string;
}

export interface TransformationStatItem {
  label: string;
  value: string;
  detail?: string;
}

export interface TrainerItem {
  name: string;
  role: string;
  specialties: string[];
  certifications: string[];
  coachingStyle: string;
  image: string;
}

export interface EquipmentItem {
  title: string;
  description: string;
  image: string;
}

export interface ClassScheduleItem {
  day: string;
  sessions: string[];
}

export interface MobileAppBlock {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
}

export interface TransformationStoryItem {
  name: string;
  program: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
  beforeStat: string;
  afterStat: string;
  summary: string;
}

export interface TransformationBlock {
  eyebrow: string;
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDescription: string;
  afterDescription: string;
}

export interface SocialProofItem {
  title: string;
  handle: string;
  description: string;
}

export interface SocialProofBlock {
  eyebrow: string;
  title: string;
  description: string;
  items: SocialProofItem[];
}

export interface TemplateContent {
  key: IndustryKey;
  seo: SeoConfig;
  theme?: ThemeConfig;
  business?: BusinessProfile;
  locations?: Location[];
  booking?: BookingConfig;
  offers?: OfferItem[];
  reviews?: ReviewAggregate;
  brand: BrandConfig;
  nav: NavItem[];
  trustBadges?: TrustBadgeItem[];
  proofItems?: ProofItem[];
  transformationStats?: TransformationStatItem[];
  trainers?: TrainerItem[];
  equipment?: EquipmentItem[];
  classSchedule?: ClassScheduleItem[];
  mobileApp?: MobileAppBlock;
  transformationStories?: TransformationStoryItem[];
  transformation?: TransformationBlock;
  socialProof?: SocialProofBlock;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    media?: HeroMedia;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    stats: HeroStatsItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    items: PricingItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    items: GalleryItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    items: ContactItem[];
  };
  map: MapConfig;
  cta: CtaConfig;
}
