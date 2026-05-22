import type { TemplateContent } from '@/types/content';
import { getVisualAssets } from '@/config/visuals';

const visuals = getVisualAssets('hotel');

export const hotelTemplateContent: TemplateContent = {
  key: 'hotel',
  seo: {
    title: 'Harbor Suites | Premium Hotel Website Demo',
    description: 'A premium hotel and resort website template for bookings, rooms, and guest trust.',
    keywords: ['hotel website', 'resort website', 'hospitality website', 'booking website'],
    canonicalPath: '/demo/hotel'
  },
  theme: {
    name: 'Harbor',
    primary: '#1e293b',
    accent: '#d4af37',
    gradient: 'from-slate-950 via-slate-900 to-amber-950',
    mood: 'luxury'
  },
  business: {
    type: 'hotel',
    whatsapp: '+15552036666',
    bookingHref: '#contact',
    socials: [{ label: 'Instagram', href: 'https://instagram.com' }]
  },
  brand: {
    name: 'Harbor Suites',
    tagLine: 'Refined rooms, curated amenities, and seamless direct bookings.',
    phone: '(555) 203-6666',
    email: 'stay@harborsuites.com',
    address: '7 Ocean Drive, Miami, FL',
    hours: '24/7 front desk'
  },
  nav: [
    { label: 'Rooms', href: '#services' },
    { label: 'Amenities', href: '#gallery' },
    { label: 'Book', href: '#contact' }
  ],
  trustBadges: [
    { label: 'Direct booking' },
    { label: 'Ocean-view rooms' },
    { label: 'Concierge service' }
  ],
  proofItems: [
    { label: '4.9/5', value: 'Guest satisfaction', description: 'Premium guest experience and repeat stays.' },
    { label: '24/7', value: 'Concierge', description: 'Hotel-ready support signals for travelers.' },
    { label: '1 click', value: 'Booking path', description: 'Fast direct-booking CTA for mobile users.' }
  ],
  hero: {
    eyebrow: 'Harbor Suites Resort',
    title: 'An immersive coastal stay with premium suites, curated dining, and effortless booking.',
    description:
      'A luxury hospitality experience focused on direct booking, destination storytelling, and high-intent traveler conversion.',
    media: {
      image: visuals.hero.image,
      alt: visuals.hero.alt,
      caption: 'Immersive hospitality imagery with a calm luxury rhythm.'
    },
    primaryCta: {
      eyebrow: 'Book your stay',
      title: 'Check suite availability',
      description: 'Drive direct reservations with a premium booking flow for mobile and desktop travelers.',
      primaryLabel: 'Book Stay',
      primaryHref: '#contact',
      secondaryLabel: 'View Rooms',
      secondaryHref: '#services'
    },
    stats: [
      { value: '24/7', label: 'Concierge desk' },
      { value: '3 min', label: 'Booking path' },
      { value: '90+', label: 'Lighthouse target' }
    ]
  },
  services: {
    eyebrow: 'Rooms + experiences',
    title: 'Suites, amenities, and destination-led experiences built for luxury travel intent.',
    description: 'Structured for room showcases, wellness offers, and on-site hospitality highlights.',
    items: [
      { title: 'Ocean Signature Suite', description: 'Floor-to-ceiling views, premium bedding, and private balcony mornings.', icon: 'CircleCheckBig', image: visuals.gallery[1] },
      { title: 'Resort Spa + Wellness', description: 'Massage rituals, thermal experiences, and sunrise recovery sessions.', icon: 'Users', image: visuals.gallery[2] },
      { title: 'Destination Dining', description: 'Chef-led menus, sunset pairings, and seasonal coastal cuisine.', icon: 'Target', image: visuals.gallery[3] },
      { title: 'Private Event Terraces', description: 'Luxury gatherings with concierge event planning.', icon: 'Apple', image: visuals.gallery[0] }
    ]
  },
  testimonials: {
    eyebrow: 'Guest reviews',
    title: 'Guest reviews that reinforce direct booking confidence.',
    description: 'Trust signals focused on suite quality, service standards, and memorable destination stays.',
    items: [
      { quote: 'The site makes booking feel effortless and premium.', name: 'Elena T.', role: 'Guest', rating: 5, avatar: visuals.avatars[0] },
      { quote: 'We finally have a website that feels like our property.', name: 'Marco P.', role: 'General Manager', rating: 5, avatar: visuals.avatars[1] },
      { quote: 'Guests can find rooms and amenities fast on mobile.', name: 'Jules R.', role: 'Front desk lead', rating: 5, avatar: visuals.avatars[2] }
    ]
  },
  pricing: {
    eyebrow: 'Stay options',
    title: 'Use the pricing cards for rooms, packages, or seasonal offers.',
    description: 'The same cards can present nights, suites, or promotional stay bundles.',
    items: [
      { name: 'Standard', price: '$189', description: 'A simple room option for short stays.', features: ['King bed', 'Wi-Fi', 'Breakfast add-on'], ctaLabel: 'Book Standard', ctaHref: '#contact' },
      { name: 'Suite', price: '$299', description: 'More space and premium guest comfort.', features: ['Separate lounge', 'Premium amenities', 'Priority service'], featured: true, ctaLabel: 'Book Suite', ctaHref: '#contact' },
      { name: 'Resort Package', price: '$499', description: 'An elevated package for longer visits.', features: ['Spa access', 'Dining credit', 'Late checkout'], ctaLabel: 'Book Package', ctaHref: '#contact' }
    ]
  },
  gallery: {
    eyebrow: 'Resort gallery',
    title: 'Immersive hospitality imagery across suites, dining, and destination experiences.',
    description: 'Visual storytelling designed to make the stay feel aspirational before booking.',
    items: [
      { title: 'Lobby', description: 'Welcoming first impression', tone: 'dark', image: visuals.gallery[0] },
      { title: 'Suite interior', description: 'Luxury guest rooms', tone: 'accent', image: visuals.gallery[1] },
      { title: 'Pool deck', description: 'Leisure and relaxation', tone: 'light', image: visuals.gallery[2] },
      { title: 'Dining lounge', description: 'Food and beverage experience', tone: 'dark', image: visuals.gallery[3] }
    ]
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Capture booking objections before they affect conversion.',
    description: 'Hotel FAQ content should be direct, clear, and travel-friendly.',
    items: [
      { question: 'Is direct booking available?', answer: 'Yes. The primary CTA routes guests directly into the booking process.' },
      { question: 'Can this support multiple room types?', answer: 'Yes. The template is structured for room and package expansion.' },
      { question: 'Can we show amenities clearly?', answer: 'Yes. The gallery and services blocks are designed for amenity storytelling.' }
    ]
  },
  contact: {
    eyebrow: 'Book your stay',
    title: 'Make reservation and contact details obvious.',
    description: 'The contact flow gives guests direct routes to call, email, or book online.',
    items: [
      { label: 'Phone', value: '(555) 203-6666', href: 'tel:+15552036666' },
      { label: 'Email', value: 'stay@harborsuites.com', href: 'mailto:stay@harborsuites.com' },
      { label: 'Address', value: '7 Ocean Drive, Miami, FL' },
      { label: 'Hours', value: '24/7 front desk' }
    ]
  },
  map: {
    title: 'Find Harbor Suites',
    address: '7 Ocean Drive, Miami, FL'
  },
  cta: {
    eyebrow: 'Reserve directly',
    title: 'A hotel template that turns browsing into bookings.',
    description: 'Use this foundation to launch resort or boutique hotel websites quickly and cleanly.',
    primaryLabel: 'Book a Stay',
    primaryHref: '#contact',
    secondaryLabel: 'Call Front Desk',
    secondaryHref: 'tel:+15552036666'
  },
  socialProof: {
    eyebrow: 'Guest moments',
    title: 'Social proof for room previews and experience highlights.',
    description: 'Built to support branded visuals and travel story snippets.',
    items: [
      { title: 'Sunrise balcony view', handle: '@harborsuites', description: 'Premium morning mood for travelers.' },
      { title: 'Concierge welcome', handle: '@harborsuites', description: 'Signals of service quality and care.' },
      { title: 'Poolside lounge', handle: '@harborsuites', description: 'Amenity storytelling that helps convert.' },
      { title: 'Suite checkout', handle: '@harborsuites', description: 'Clean, polished room experience.' }
    ]
  }
};
