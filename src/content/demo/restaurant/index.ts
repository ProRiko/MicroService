import type { TemplateContent } from '@/types/content';
import { getVisualAssets } from '@/config/visuals';

const visuals = getVisualAssets('restaurant');

export const restaurantTemplateContent: TemplateContent = {
  key: 'restaurant',
  seo: {
    title: 'Ember House | Premium Restaurant Website Demo',
    description: 'A premium restaurant website template for fine dining, bistros, and high-conversion reservations.',
    keywords: ['restaurant website', 'fine dining', 'reservation website', 'local restaurant'],
    canonicalPath: '/demo/restaurant'
  },
  theme: {
    name: 'Ember',
    primary: '#7c2d12',
    accent: '#f97316',
    gradient: 'from-red-950 via-amber-950 to-stone-950',
    mood: 'warm'
  },
  business: {
    type: 'restaurant',
    whatsapp: '+15552035555',
    bookingHref: '#contact',
    socials: [{ label: 'Instagram', href: 'https://instagram.com' }]
  },
  brand: {
    name: 'Ember House',
    tagLine: 'Refined dining, seasonal dishes, and private events in one polished experience.',
    phone: '(555) 203-5555',
    email: 'reservations@emberhouse.com',
    address: '410 Meridian Avenue, Chicago, IL',
    hours: 'Tue-Sun 5:00pm-10:00pm'
  },
  nav: [
    { label: 'Menu', href: '#services' },
    { label: 'Dining', href: '#gallery' },
    { label: 'Reservations', href: '#contact' }
  ],
  trustBadges: [
    { label: 'Seasonal menu' },
    { label: 'Private dining' },
    { label: 'Online reservations' }
  ],
  proofItems: [
    { label: '4.8/5', value: 'Guest rating', description: 'Premium experiences with repeat bookings.' },
    { label: '48 hrs', value: 'Notice for events', description: 'Lead time for private dining and buyouts.' },
    { label: 'Daily', value: 'Menu updates', description: 'Fast content changes for seasonal launches.' }
  ],
  hero: {
    eyebrow: 'Ember House Dining',
    title: 'A reservation-first dining experience shaped by fire, seasonality, and craft.',
    description:
      'Luxury hospitality with tasting menus, chef storytelling, and immersive ambience designed for memorable evenings.',
    media: {
      image: visuals.hero.image,
      alt: visuals.hero.alt,
      caption: 'Refined dining atmosphere with rich plating and immersive hospitality lighting.'
    },
    primaryCta: {
      eyebrow: 'Reserve your table',
      title: 'Reserve your table tonight',
      description: 'Secure chef-counter and prime-hour seating with a clear premium reservation flow.',
      primaryLabel: 'Reserve Table',
      primaryHref: '#contact',
      secondaryLabel: 'View Menu',
      secondaryHref: '#services'
    },
    stats: [
      { value: '2 min', label: 'Reservation path' },
      { value: 'Seasonal', label: 'Menu changes' },
      { value: '90+', label: 'Lighthouse target' }
    ]
  },
  services: {
    eyebrow: 'Chef specials',
    title: 'Signature dining formats curated for elegant evenings and private celebrations.',
    description: 'From tasting menus to wine pairing nights, each offer is designed for high-value reservations.',
    items: [
      { title: 'Chef Tasting Journey', description: 'Multi-course progression with seasonal ingredients and plated storytelling.', icon: 'Target', image: visuals.gallery[0] },
      { title: 'À La Carte Signatures', description: 'Award-winning mains and starters for a refined à la carte experience.', icon: 'Apple', image: visuals.gallery[1] },
      { title: 'Private Dining Salon', description: 'Premium private rooms for celebrations, client dinners, and events.', icon: 'Users', image: visuals.gallery[3] },
      { title: 'Wine Pairing Program', description: 'Sommelier-guided pairings designed around weekly chef specials.', icon: 'CircleCheckBig', image: visuals.gallery[2] }
    ]
  },
  testimonials: {
    eyebrow: 'Guest reviews',
    title: 'Guest reviews that validate the full dining experience.',
    description: 'Short, elegant social proof around service quality, food depth, and premium ambience.',
    items: [
      { quote: 'The site feels premium and the reservation CTA is impossible to miss.', name: 'Sophia L.', role: 'Guest', rating: 5, avatar: visuals.avatars[0] },
      { quote: 'Menus and private dining requests are much easier to manage now.', name: 'Marcus D.', role: 'Owner', rating: 5, avatar: visuals.avatars[1] },
      { quote: 'The design makes the brand look far more polished on mobile.', name: 'Ivy N.', role: 'General Manager', rating: 5, avatar: visuals.avatars[2] }
    ]
  },
  pricing: {
    eyebrow: 'Dining options',
    title: 'Turn the pricing area into menus, tasting formats, or event offerings.',
    description: 'The same card system can present hospitality offers without extra code.',
    items: [
      { name: 'Chef Tasting', price: '$89', description: 'Multi-course tasting menu.', features: ['7 courses', 'Wine pairing add-on', 'Seasonal produce'], ctaLabel: 'Reserve Tasting', ctaHref: '#contact' },
      { name: 'Dinner for Two', price: '$140', description: 'A premium guest experience.', features: ['Shared starter', 'Two mains', 'Dessert selection'], featured: true, ctaLabel: 'Book Dinner', ctaHref: '#contact' },
      { name: 'Private Event', price: 'Custom', description: 'Dining room buyouts and gatherings.', features: ['Custom menu', 'Dedicated service', 'Event planning'], ctaLabel: 'Request Event', ctaHref: '#contact' }
    ]
  },
  gallery: {
    eyebrow: 'Dining gallery',
    title: 'Cinematic food and interior imagery that sells the atmosphere immediately.',
    description: 'Luxury-led visual storytelling across chef counter, wine service, and private dining rooms.',
    items: [
      { title: 'Chef Counter', description: 'Intimate chef-led dining', tone: 'dark', image: visuals.gallery[0] },
      { title: 'Main Room', description: 'Elegant seating and lighting', tone: 'light', image: visuals.gallery[1] },
      { title: 'Wine Wall', description: 'Curated pairing list', tone: 'accent', image: visuals.gallery[2] },
      { title: 'Private Room', description: 'Reservation-only space', tone: 'dark', image: visuals.gallery[3] }
    ]
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Answer booking and menu questions before guests call.',
    description: 'Keep the path to reservation simple and concise.',
    items: [
      { question: 'Do you take walk-ins?', answer: 'Yes, when seating is available. Reservations are recommended.' },
      { question: 'Can I book a private event?', answer: 'Yes. The contact section and CTA can route requests directly to the restaurant.' },
      { question: 'Do menus change seasonally?', answer: 'Yes. Content is structured so seasonal menu updates are fast.' }
    ]
  },
  contact: {
    eyebrow: 'Reservations',
    title: 'Make booking feel effortless.',
    description: 'The contact flow supports dining reservations and private event requests.',
    items: [
      { label: 'Phone', value: '(555) 203-5555', href: 'tel:+15552035555' },
      { label: 'Email', value: 'reservations@emberhouse.com', href: 'mailto:reservations@emberhouse.com' },
      { label: 'Address', value: '410 Meridian Avenue, Chicago, IL' },
      { label: 'Hours', value: 'Tue-Sun 5:00pm-10:00pm' }
    ]
  },
  map: {
    title: 'Visit Ember House',
    address: '410 Meridian Avenue, Chicago, IL'
  },
  cta: {
    eyebrow: 'Reserve now',
    title: 'A restaurant website engineered for more bookings.',
    description: 'Premium presentation, fast reservation routes, and flexible content updates for any dining brand.',
    primaryLabel: 'Reserve a Table',
    primaryHref: '#contact',
    secondaryLabel: 'Call Now',
    secondaryHref: 'tel:+15552035555'
  },
  socialProof: {
    eyebrow: 'Social proof',
    title: 'Instagram-ready highlights for a dining brand.',
    description: 'Use this block to preview plates, rooms, and events.',
    items: [
      { title: 'Chef tasting moment', handle: '@emberhouse', description: 'Fine dining visuals and dish storytelling.' },
      { title: 'Wine pairing', handle: '@emberhouse', description: 'A polished way to sell the experience.' },
      { title: 'Private dining room', handle: '@emberhouse', description: 'Conversions for events and buyouts.' },
      { title: 'Signature dessert', handle: '@emberhouse', description: 'Memorable close to the dining journey.' }
    ]
  }
};
