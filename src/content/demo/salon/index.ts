import type { TemplateContent } from '@/types/content';
import { getVisualAssets } from '@/config/visuals';

const visuals = getVisualAssets('salon');

export const salonTemplateContent: TemplateContent = {
  key: 'salon',
  seo: {
    title: 'Glow Atelier | Premium Salon Website Demo',
    description: 'A polished salon and spa website template designed for bookings, service menus, and trust.',
    keywords: ['salon website', 'spa website', 'beauty business', 'booking website'],
    canonicalPath: '/demo/salon'
  },
  theme: {
    name: 'Glow',
    primary: '#701a75',
    accent: '#ec4899',
    gradient: 'from-fuchsia-950 via-rose-950 to-slate-950',
    mood: 'luxury'
  },
  business: {
    type: 'local-business',
    whatsapp: '+15552037777',
    bookingHref: '#contact',
    instagramHref: 'https://instagram.com',
    socials: [{ label: 'Instagram', href: 'https://instagram.com' }]
  },
  brand: {
    name: 'Glow Atelier',
    tagLine: 'Beauty, wellness, and premium self-care with a calm booking experience.',
    phone: '(555) 203-7777',
    email: 'bookings@glowatelier.com',
    address: '19 Rose Avenue, Los Angeles, CA',
    hours: 'Mon-Sat 9:00am-7:00pm'
  },
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#testimonials' },
    { label: 'Book', href: '#contact' }
  ],
  trustBadges: [
    { label: 'Licensed stylists' },
    { label: 'Premium products' },
    { label: 'Online booking' }
  ],
  proofItems: [
    { label: '4.9/5', value: 'Guest rating', description: 'Consistently strong client reviews.' },
    { label: '15 min', value: 'Booking flow', description: 'Fast online booking on mobile.' },
    { label: '60+', value: 'Monthly repeat clients', description: 'Built to encourage loyalty and rebooking.' }
  ],
  hero: {
    eyebrow: 'Glow Atelier Wellness',
    title: 'Luxury beauty and wellness rituals designed for calm confidence.',
    description:
      'A soft premium salon-spa experience with expert stylists, skin specialists, and effortless appointment booking.',
    media: {
      image: visuals.hero.image,
      alt: visuals.hero.alt,
      caption: 'Soft luxury lighting and a calm premium feel for beauty clients.'
    },
    primaryCta: {
      eyebrow: 'Book now',
      title: 'Reserve your treatment session',
      description: 'Book hair, skin, and spa rituals in a clean, mobile-friendly flow.',
      primaryLabel: 'Book Appointment',
      primaryHref: '#contact',
      secondaryLabel: 'View Services',
      secondaryHref: '#services'
    },
    stats: [
      { value: 'Online', label: 'Booking ready' },
      { value: '10+', label: 'Service blocks' },
      { value: '90+', label: 'Lighthouse target' }
    ]
  },
  services: {
    eyebrow: 'Signature treatments',
    title: 'Curated beauty and wellness services with a luxury studio touch.',
    description: 'Premium treatments across hair, skin, and relaxation rituals with clear booking pathways.',
    items: [
      { title: 'Hair Design Atelier', description: 'Precision cuts, styling rituals, and runway-inspired finishing.', icon: 'Target', image: visuals.gallery[0] },
      { title: 'Color + Gloss Studio', description: 'Dimensional color, toning, and healthy shine restoration.', icon: 'Apple', image: visuals.gallery[2] },
      { title: 'Skin Renewal Facials', description: 'Hydration, glow treatments, and specialist skin protocols.', icon: 'CircleCheckBig', image: visuals.gallery[1] },
      { title: 'Calm Spa Rituals', description: 'Massage and self-care sessions for full-body reset.', icon: 'Users', image: visuals.gallery[3] }
    ]
  },
  testimonials: {
    eyebrow: 'Client love',
    title: 'Client stories that build trust in service quality and care.',
    description: 'Testimonials focused on visible results, stylist expertise, and calm premium hospitality.',
    items: [
      { quote: 'The site feels high-end and makes booking feel easy.', name: 'Nadia S.', role: 'Client', rating: 5, avatar: visuals.avatars[0] },
      { quote: 'We finally have a website that matches the experience in the studio.', name: 'Erin K.', role: 'Owner', rating: 5, avatar: visuals.avatars[1] },
      { quote: 'Appointments are easier to fill because the services are so clear.', name: 'Tara J.', role: 'Reception lead', rating: 5, avatar: visuals.avatars[2] }
    ]
  },
  pricing: {
    eyebrow: 'Service tiers',
    title: 'Present service menus, packages, or treatment bundles cleanly.',
    description: 'The pricing cards support beauty service menus without feeling like a hard sell.',
    items: [
      { name: 'Signature Cut', price: '$65', description: 'Premium cut and finish.', features: ['Consultation', 'Custom styling', 'Aftercare tips'], ctaLabel: 'Book Cut', ctaHref: '#contact' },
      { name: 'Color + Finish', price: '$145', description: 'High-value color service.', features: ['Tone match', 'Gloss finish', 'Product guidance'], featured: true, ctaLabel: 'Book Color', ctaHref: '#contact' },
      { name: 'Spa Ritual', price: '$120', description: 'Calm, luxury treatment package.', features: ['Skin analysis', 'Treatment add-ons', 'Relaxation focus'], ctaLabel: 'Book Ritual', ctaHref: '#contact' }
    ]
  },
  gallery: {
    eyebrow: 'Beauty gallery',
    title: 'A visual narrative across transformations, studio atmosphere, and treatment outcomes.',
    description: 'Soft premium imagery designed to feel luxurious, credible, and conversion-ready.',
    items: [
      { title: 'Gloss finish', description: 'Smooth and reflective styling', tone: 'dark', image: visuals.gallery[0] },
      { title: 'Skin glow', description: 'Fresh complexion results', tone: 'accent', image: visuals.gallery[1] },
      { title: 'Color refresh', description: 'New tone and dimension', tone: 'light', image: visuals.gallery[2] },
      { title: 'Spa calm', description: 'Soft, premium treatment rooms', tone: 'dark', image: visuals.gallery[3] }
    ]
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Reduce booking friction with clear policy answers.',
    description: 'Beauty businesses benefit from short answers about timing, deposits, and preparation.',
    items: [
      { question: 'Do you require deposits?', answer: 'The template supports deposit or prepayment messaging in the booking flow.' },
      { question: 'Can services be updated seasonally?', answer: 'Yes. The data-driven service model is built for quick updates.' },
      { question: 'Can we show multiple stylists?', answer: 'Yes. The same system can expand to team profiles later.' }
    ]
  },
  contact: {
    eyebrow: 'Book now',
    title: 'Let visitors book the right service fast.',
    description: 'This contact block is designed for appointments, consultations, and beauty enquiries.',
    items: [
      { label: 'Phone', value: '(555) 203-7777', href: 'tel:+15552037777' },
      { label: 'Email', value: 'bookings@glowatelier.com', href: 'mailto:bookings@glowatelier.com' },
      { label: 'Address', value: '19 Rose Avenue, Los Angeles, CA' },
      { label: 'Hours', value: 'Mon-Sat 9:00am-7:00pm' }
    ]
  },
  map: {
    title: 'Find Glow Atelier',
    address: '19 Rose Avenue, Los Angeles, CA'
  },
  cta: {
    eyebrow: 'Ready to glow?',
    title: 'A salon website that feels premium and books quickly.',
    description: 'Use this template for appointment-focused beauty businesses with a premium brand feel.',
    primaryLabel: 'Book an Appointment',
    primaryHref: '#contact',
    secondaryLabel: 'Call Now',
    secondaryHref: 'tel:+15552037777'
  },
  transformation: {
    eyebrow: 'Transformation',
    title: 'Before and after content that sells the result, not just the service.',
    description: 'Best for salons and spas that rely on visual proof to drive bookings.',
    beforeLabel: 'Before treatment',
    afterLabel: 'After treatment',
    beforeDescription: 'Dull, inconsistent presentation with no clear booking CTA or service hierarchy.',
    afterDescription: 'Premium service menu, strong conversion path, and trust-building proof that drives appointments.'
  },
  socialProof: {
    eyebrow: 'Instagram feed',
    title: 'Beauty brands win with visual consistency.',
    description: 'Use this section for reels, stylist work, and client transformations.',
    items: [
      { title: 'Color refresh', handle: '@glowatelier', description: 'Professional before/after highlighting.' },
      { title: 'Hydration facial', handle: '@glowatelier', description: 'Results-focused skincare content.' },
      { title: 'Treatment room', handle: '@glowatelier', description: 'Calm, premium studio atmosphere.' },
      { title: 'Weekend booking', handle: '@glowatelier', description: 'Strong call-to-action around availability.' }
    ]
  }
};
