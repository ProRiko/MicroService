import type { TemplateContent } from '@/types/content';
import { getVisualAssets } from '@/config/visuals';

const visuals = getVisualAssets('cafe');

export const cafeTemplateContent: TemplateContent = {
  key: 'cafe',
  seo: {
    title: 'Northline Cafe | Premium Cafe Website Demo',
    description: 'A warm, conversion-focused cafe website template for coffee shops and neighborhood cafes.',
    keywords: ['cafe website', 'coffee shop', 'local cafe', 'food business'],
    canonicalPath: '/demo/cafe'
  },
  theme: {
    name: 'Roast',
    primary: '#5b341f',
    accent: '#c0843d',
    gradient: 'from-stone-950 via-amber-950 to-orange-950',
    mood: 'warm'
  },
  business: {
    type: 'local-business',
    whatsapp: '+15552031234',
    bookingHref: '/#contact',
    instagramHref: 'https://instagram.com',
    socials: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' }
    ]
  },
  brand: {
    name: 'Northline Cafe',
    tagLine: 'Seasonal coffee, fresh food, and a calm neighborhood atmosphere.',
    phone: '(555) 203-1234',
    email: 'hello@northlinecafe.com',
    address: '88 Willow Street, Portland, OR',
    hours: 'Daily 7:00am-6:00pm'
  },
  nav: [
    { label: 'Menu', href: '#services' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Visit', href: '#contact' }
  ],
  trustBadges: [
    { label: 'Locally roasted coffee' },
    { label: 'Breakfast served all day' },
    { label: 'Walk-ins welcome' }
  ],
  proofItems: [
    { label: '4.9/5', value: 'Rated by locals', description: 'Consistently high reviews for coffee and atmosphere.' },
    { label: '12 min', value: 'Average order time', description: 'Fast enough for commuters and lunch breaks.' },
    { label: 'Seasonal', value: 'Menu changes', description: 'Flexible launch content for specials and featured drinks.' }
  ],
  hero: {
    eyebrow: 'Northline Coffee House',
    title: 'Specialty coffee, warm mornings, and a neighborhood atmosphere people return to.',
    description:
      'An intimate, design-led cafe experience with slow bar coffee, fresh bakes, and community tables built for long conversations.',
    media: {
      image: visuals.hero.image,
      alt: visuals.hero.alt,
      caption: 'Warm light, modern hospitality, and a neighborhood vibe that feels immediately inviting.'
    },
    primaryCta: {
      eyebrow: 'Reserve a table',
      title: 'Reserve your corner table',
      description: 'Plan a cozy catch-up, coffee date, or remote-work morning with one tap.',
      primaryLabel: 'Reserve a Table',
      primaryHref: '#contact',
      secondaryLabel: 'See Menu',
      secondaryHref: '#services'
    },
    stats: [
      { value: 'Open 7', label: 'Days a week' },
      { value: '15+', label: 'Featured drinks' },
      { value: '90+', label: 'Lighthouse target' }
    ]
  },
  services: {
    eyebrow: 'Signature menu',
    title: 'Specialty pours, house bakes, and seasonal brunch favorites.',
    description: 'Curated menu sections designed to trigger craving, social sharing, and repeat visits.',
    items: [
      { title: 'Signature Espresso', description: 'Single-origin espresso and slow-bar brewing with tasting notes.', icon: 'Apple', image: visuals.gallery[0] },
      { title: 'Pastry Counter', description: 'House croissants, sourdough bakes, and daily rotating pastry drops.', icon: 'Target', image: visuals.gallery[1] },
      { title: 'Brunch Menu', description: 'Seasonal brunch plates with vegetarian and high-protein options.', icon: 'Users', image: visuals.gallery[2] },
      { title: 'Barista Experiences', description: 'Coffee flights, tasting workshops, and latte-art nights.', icon: 'CircleCheckBig', image: visuals.gallery[3] }
    ]
  },
  testimonials: {
    eyebrow: 'Local reviews',
    title: 'Stories from regulars who treat Northline like their second home.',
    description: 'Believable guest feedback around taste, atmosphere, and the overall cafe experience.',
    items: [
      { quote: 'The cafe site feels calm, inviting, and easy to use on my phone.', name: 'Ava M.', role: 'Regular guest', rating: 5, avatar: visuals.avatars[0] },
      { quote: 'Our reservation requests increased as soon as the new site went live.', name: 'Ben R.', role: 'Owner', rating: 5, avatar: visuals.avatars[1] },
      { quote: 'The layout makes our menu and daily specials easy to scan.', name: 'Lena C.', role: 'Food blogger', rating: 5, avatar: visuals.avatars[2] }
    ]
  },
  pricing: {
    eyebrow: 'Featured offers',
    title: 'Use packages, tasting boards, or catering offers to lift the average order.',
    description: 'The pricing component adapts cleanly to cafe promos and recurring offers.',
    items: [
      { name: 'Coffee Flight', price: '$18', description: 'Three seasonal drinks with tasting notes.', features: ['Barista curated', 'Seasonal rotation', 'Perfect for groups'], ctaLabel: 'Book Flight', ctaHref: '#contact' },
      { name: 'Breakfast Bundle', price: '$24', description: 'Popular breakfast combo for two.', features: ['Coffee included', 'Morning pickup', 'Fast service'], featured: true, ctaLabel: 'Order Bundle', ctaHref: '#contact' },
      { name: 'Private Event', price: 'From $150', description: 'Small events, catering, and buyouts.', features: ['Flexible menus', 'Weekend availability', 'Group bookings'], ctaLabel: 'Request Event', ctaHref: '#contact' }
    ]
  },
  gallery: {
    eyebrow: 'Cafe atmosphere',
    title: 'A warm interior that feels built for conversation, focus, and slow mornings.',
    description: 'Lifestyle-led imagery that makes the space feel real before a customer ever arrives.',
    items: [
      { title: 'Bar Seating', description: 'Front-of-house with community energy', tone: 'dark', image: visuals.gallery[0] },
      { title: 'Pastry Case', description: 'Fresh bakery items daily', tone: 'light', image: visuals.gallery[1] },
      { title: 'Quiet Corner', description: 'Remote work-friendly space', tone: 'accent', image: visuals.gallery[2] },
      { title: 'Outdoor Tables', description: 'Neighborhood seating', tone: 'dark', image: visuals.gallery[3] }
    ]
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Remove friction around ordering and reservations.',
    description: 'Answer the most common cafe questions before they slow conversions.',
    items: [
      { question: 'Do you accept walk-ins?', answer: 'Yes. Reservations are encouraged for peak hours but not required.' },
      { question: 'Can we update the specials daily?', answer: 'Yes. The content model supports fast copy updates for promotions.' },
      { question: 'Does the site support catering inquiries?', answer: 'Yes. The same template can power event or catering forms.' }
    ]
  },
  contact: {
    eyebrow: 'Visit us',
    title: 'Make directions and reservations easy to find.',
    description: 'The contact section prioritizes location clarity and quick taps to action.',
    items: [
      { label: 'Phone', value: '(555) 203-1234', href: 'tel:+15552031234' },
      { label: 'Email', value: 'hello@northlinecafe.com', href: 'mailto:hello@northlinecafe.com' },
      { label: 'Address', value: '88 Willow Street, Portland, OR' },
      { label: 'Hours', value: 'Daily 7:00am-6:00pm' }
    ]
  },
  map: {
    title: 'Find Northline Cafe',
    address: '88 Willow Street, Portland, OR'
  },
  cta: {
    eyebrow: 'Ready to book?',
    title: 'A cafe site that drives visits, orders, and reservations.',
    description: 'Use this template to launch a polished cafe presence quickly and keep updates simple.',
    primaryLabel: 'Reserve a Table',
    primaryHref: '#contact',
    secondaryLabel: 'Call the Cafe',
    secondaryHref: 'tel:+15552031234'
  },
  socialProof: {
    eyebrow: 'Instagram moments',
    title: 'Show the vibe people expect before they arrive.',
    description: 'Great for daily specials, latte art, and atmosphere-driven content.',
    items: [
      { title: 'Morning pour-over', handle: '@northlinecafe', description: 'Signature brews and rotating single-origin picks.' },
      { title: 'Seasonal pastry drop', handle: '@northlinecafe', description: 'Fresh bakes that create repeat visits.' },
      { title: 'Lunch crowd', handle: '@northlinecafe', description: 'Busy midday service and fast table turnover.' },
      { title: 'Sunday brunch', handle: '@northlinecafe', description: 'A polished reason to book ahead.' }
    ]
  }
};
