import type { TemplateContent } from '@/types/content';

export const gymTemplateContent: TemplateContent = {
  key: 'gym',
  seo: {
    title: 'Forge Athletics Club | Cinematic Premium Gym Demo',
    description:
      'A cinematic, conversion-focused gym website demo for premium fitness studios and transformation-led coaching brands.',
    keywords: ['premium gym website', 'fitness transformation', 'high-end gym', 'athletic coaching studio'],
    canonicalPath: '/demo/gym'
  },
  theme: {
    name: 'Forge',
    primary: '#0a0a0b',
    accent: '#ff4d1a',
    gradient: 'from-black via-zinc-950 to-orange-950',
    mood: 'energetic'
  },
  business: {
    type: 'local-business',
    whatsapp: '+15552039481',
    bookingHref: '#contact',
    instagramHref: 'https://instagram.com',
    socials: [{ label: 'Instagram', href: 'https://instagram.com' }]
  },
  brand: {
    name: 'Forge Athletics Club',
    tagLine: 'Luxury performance training for disciplined professionals, athletes, and serious beginners.',
    phone: '(555) 203-9481',
    email: 'join@forgeathletics.com',
    address: '1250 Market Street, Suite 4, Austin, TX',
    hours: 'Mon-Fri 5:00am-10:00pm · Sat-Sun 6:00am-6:00pm'
  },
  nav: [
    { label: 'Programs', href: '#services' },
    { label: 'Memberships', href: '#pricing' },
    { label: 'Coaches', href: '#trainers' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Contact', href: '#contact' }
  ],
  trustBadges: [
    { label: 'NSCA + NASM certified coaching team' },
    { label: 'Recovery lounge and mobility studio' },
    { label: 'App-based coaching and habit tracking' },
    { label: '24-hour WhatsApp onboarding support' }
  ],
  proofItems: [
    { label: 'Member community', value: '2,800+', description: 'Active members across classes, open gym, and PT tracks.' },
    { label: 'Google rating', value: '4.9/5', description: 'Rated by local members for coaching quality and atmosphere.' },
    { label: 'Results window', value: '8-12 weeks', description: 'Average visible transformation window with program adherence.' }
  ],
  transformationStats: [
    { label: 'Body-fat reduction', value: '14.2%', detail: 'Average loss in first 90 days for transformation members.' },
    { label: 'Strength increase', value: '31%', detail: 'Average compound-lift improvement in first 12-week cycle.' },
    { label: 'Session adherence', value: '92%', detail: 'Members who complete 4+ sessions weekly during coached blocks.' },
    { label: 'Retention at 6 months', value: '88%', detail: 'Members maintaining training consistency beyond initial goals.' }
  ],
  hero: {
    eyebrow: 'Forge Performance Club',
    title: 'Build a stronger body. Move with confidence. Look unstoppable.',
    description:
      'Forge is a premium strength and conditioning gym for ambitious people who want visible progress. Elite coaching, high-performance programming, and a cinematic training floor designed to keep your momentum high.',
    media: {
      image: '/images/demo/gym/hero-main.jpg',
      alt: 'Athlete performing barbell lift in premium dark gym',
      caption: 'High-intensity coaching sessions, premium equipment, and a transformation-first gym culture.'
    },
    primaryCta: {
      eyebrow: 'Transformation starts now',
      title: 'Start your first 6-week coached sprint',
      description: 'Meet your coach, set measurable goals, and train with a progression system built for real outcomes.',
      primaryLabel: 'Start Your Transformation',
      primaryHref: '#free-trial',
      secondaryLabel: 'View Programs',
      secondaryHref: '#services'
    },
    stats: [
      { value: '2,800+', label: 'Active Members' },
      { value: '64', label: 'Coach-Led Classes / Week' },
      { value: '1,250+', label: 'Monthly Transformation Check-ins' }
    ]
  },
  services: {
    eyebrow: 'Fitness programs',
    title: 'Training systems built for strength, physique, and total performance.',
    description:
      'Every program includes progression targets, coach feedback, and recovery planning so your effort converts into measurable results.',
    items: [
      {
        title: 'Elite Strength Lab',
        description: 'Periodized strength blocks focused on progressive overload, form precision, and weekly PR execution.',
        icon: 'Dumbbell',
        image: '/images/demo/gym/program-strength.jpg'
      },
      {
        title: 'MetCon HIIT Sessions',
        description: 'Coach-led metabolic conditioning classes that combine intensity, tempo control, and smart recovery intervals.',
        icon: 'Users',
        image: '/images/demo/gym/program-hiit.jpg'
      },
      {
        title: 'Transformation Nutrition',
        description: 'Macro targets, hydration protocols, and habit accountability integrated into your training program.',
        icon: 'Apple',
        image: '/images/demo/gym/gallery-2.jpg'
      },
      {
        title: 'Hybrid Athlete Coaching',
        description: 'Strength, conditioning, and mobility sessions for members training for aesthetic and athletic outcomes.',
        icon: 'Target',
        image: '/images/demo/gym/gallery-3.jpg'
      }
    ]
  },
  trainers: [
    {
      name: 'Marcus Hale',
      role: 'Head Strength Coach',
      specialties: ['Strength Periodization', 'Power Development', 'Athletic Movement'],
      certifications: ['CSCS', 'USAW Level 1', 'Precision Nutrition L1'],
      coachingStyle: 'High-accountability coaching with technical lifting cues and weekly strength benchmarks.',
      image: '/images/demo/gym/trainer-1.jpg'
    },
    {
      name: 'Elena Cruz',
      role: 'Body Recomposition Coach',
      specialties: ['Fat Loss', 'Hypertrophy', 'Female Strength Training'],
      certifications: ['NASM-CPT', 'FRC Mobility', 'Pre/Postnatal Fitness'],
      coachingStyle: 'Data-informed programming with structured nutrition support and lifestyle-focused execution plans.',
      image: '/images/demo/gym/trainer-2.jpg'
    },
    {
      name: 'Darius Knox',
      role: 'Performance Conditioning Coach',
      specialties: ['Metabolic Conditioning', 'Speed and Agility', 'Combat Athlete Prep'],
      certifications: ['EXOS XPS', 'TRX', 'CPR/AED'],
      coachingStyle: 'Energetic, precision-led sessions designed to increase conditioning without sacrificing recovery quality.',
      image: '/images/demo/gym/trainer-3.jpg'
    }
  ],
  equipment: [
    {
      title: 'Competition Strength Floor',
      description: 'Olympic platforms, calibrated plates, power racks, and velocity tracking tools for high-performance lifting.',
      image: '/images/demo/gym/equipment.jpg'
    },
    {
      title: 'Conditioning Turf Zone',
      description: 'Sled lanes, battle ropes, assault bikes, and functional rigs for high-output conditioning blocks.',
      image: '/images/demo/gym/gallery-1.jpg'
    },
    {
      title: 'Recovery and Mobility Studio',
      description: 'Dedicated flexibility bays, percussion tools, and guided mobility workflows between training cycles.',
      image: '/images/demo/gym/gallery-4.jpg'
    }
  ],
  classSchedule: [
    {
      day: 'Monday to Friday',
      sessions: ['5:30 AM Strength Base', '7:00 AM Express HIIT', '6:15 PM Hybrid Performance', '7:30 PM Athletic Conditioning']
    },
    {
      day: 'Saturday',
      sessions: ['8:00 AM Full-Body Engine', '9:30 AM Coach Technique Lab', '11:00 AM Community Team Lift']
    },
    {
      day: 'Sunday',
      sessions: ['8:30 AM Mobility and Reset', '10:00 AM Open Gym Coaching Window']
    }
  ],
  testimonials: {
    eyebrow: 'Client testimonials',
    title: 'Members who committed to the process and changed their lives.',
    description:
      'From body recomposition to confidence and consistency, these stories capture what disciplined coaching can unlock.',
    items: [
      {
        quote:
          'I lost 12.4kg in 16 weeks while increasing my squat by 27kg. Forge gave me structure, accountability, and a coaching team that genuinely cared.',
        name: 'Maya Chen',
        role: 'Transformation Track · 16 weeks',
        rating: 5,
        avatar: '/images/demo/gym/trainer-2.jpg'
      },
      {
        quote:
          'I came in with zero consistency. Now I train 5 days a week, track nutrition in the app, and finally feel athletic again.',
        name: 'Jordan Ellis',
        role: 'Hybrid Performance Program',
        rating: 5,
        avatar: '/images/demo/gym/trainer-1.jpg'
      },
      {
        quote:
          'The environment is elite but never intimidating. The coaches know your goals, and every workout feels like progress.',
        name: 'Priya Patel',
        role: 'Strength Track Member',
        rating: 5,
        avatar: '/images/demo/gym/trainer-3.jpg'
      }
    ]
  },
  transformationStories: [
    {
      name: 'Aiden Brooks',
      program: '12-Week Body Recomposition',
      timeline: '12 weeks',
      beforeImage: '/images/demo/gym/transform-before.jpg',
      afterImage: '/images/demo/gym/transform-after.jpg',
      beforeStat: '27.8% body fat · inconsistent training',
      afterStat: '16.9% body fat · 4 sessions/week',
      summary:
        'Aiden moved from irregular home workouts to structured in-gym blocks, weekly nutrition accountability, and measurable fat-loss with strength gains.'
    },
    {
      name: 'Sofia Reyes',
      program: 'Elite Strength and Conditioning',
      timeline: '16 weeks',
      beforeImage: '/images/demo/gym/gallery-2.jpg',
      afterImage: '/images/demo/gym/gallery-3.jpg',
      beforeStat: 'Deadlift 72kg · low confidence',
      afterStat: 'Deadlift 118kg · high athletic output',
      summary:
        'Sofia built full-body strength, improved conditioning markers, and gained visible physique changes by following programmed coaching and recovery blocks.'
    }
  ],
  pricing: {
    eyebrow: 'Membership plans',
    title: 'Choose your performance tier and start your next training phase.',
    description:
      'All memberships include onboarding, app tracking, and coach support. Upgrade intensity based on your goals and accountability needs.',
    items: [
      {
        name: 'Essential',
        price: '$129/mo',
        description: 'For members building consistency and strength fundamentals.',
        features: ['3 coached classes per week', 'Open gym access', 'Monthly progress scan', 'Starter nutrition guide'],
        ctaLabel: 'Choose Essential',
        ctaHref: '#free-trial'
      },
      {
        name: 'Performance+',
        price: '$219/mo',
        description: 'Our most popular transformation plan for rapid, coached results.',
        features: ['Unlimited classes + open gym', 'Weekly coach check-ins', 'App-based training and nutrition', 'Recovery lounge access'],
        featured: true,
        ctaLabel: 'Start Performance+',
        ctaHref: '#free-trial'
      },
      {
        name: 'Elite Coaching',
        price: '$349/mo',
        description: 'High-touch training for body recomposition and athletic performance.',
        features: ['Weekly 1:1 coaching session', 'Custom periodized programming', 'Personalized macro coaching', 'Priority schedule and recovery'],
        ctaLabel: 'Apply for Elite',
        ctaHref: '#free-trial'
      }
    ]
  },
  gallery: {
    eyebrow: 'Gym gallery',
    title: 'Inside Forge: training energy, elite facilities, and community momentum.',
    description:
      'A modern premium gym atmosphere built for serious work: coaching lanes, high-output classes, and social energy that keeps members consistent.',
    items: [
      { title: 'Strength Hall', description: 'Heavy lift bays with coach oversight', tone: 'dark', image: '/images/demo/gym/gallery-1.jpg' },
      { title: 'Functional Zone', description: 'Athletic conditioning, sleds, and circuits', tone: 'accent', image: '/images/demo/gym/gallery-2.jpg' },
      { title: 'Coach Floor', description: '1:1 sessions and movement correction', tone: 'light', image: '/images/demo/gym/gallery-3.jpg' },
      { title: 'Community Class Studio', description: 'High-energy group blocks and team sessions', tone: 'dark', image: '/images/demo/gym/gallery-4.jpg' }
    ]
  },
  mobileApp: {
    eyebrow: 'Forge app',
    title: 'Your training plan, progress, and coach in your pocket.',
    description:
      'Track workouts, log meals, view class slots, and chat with your coach in one premium mobile experience designed for consistency.',
    primaryLabel: 'Download the App',
    primaryHref: '#contact',
    secondaryLabel: 'See App Features',
    secondaryHref: '#services',
    image: '/images/demo/gym/app-mockup.jpg'
  },
  faq: {
    eyebrow: 'Common questions',
    title: 'Everything to know before your first session.',
    description: 'Clear answers around memberships, class levels, and onboarding so you can start confidently.',
    items: [
      {
        question: 'Do I need to be fit before joining Forge?',
        answer: 'No. We assess your current level, then place you into the right coaching track and class intensity.'
      },
      {
        question: 'Can I start with a free trial session?',
        answer: 'Yes. Every new member gets a guided free-trial workout and a goal-setting consult with a coach.'
      },
      {
        question: 'Is the app included in all memberships?',
        answer: 'Yes. All plans include workout tracking, class booking, and direct message access to our coaching team.'
      }
    ]
  },
  contact: {
    eyebrow: 'Contact and location',
    title: 'Visit Forge and start your transformation this week.',
    description:
      'Drop in for a facility tour, meet your coach, and complete your first movement and performance assessment.',
    items: [
      { label: 'Phone', value: '(555) 203-9481', href: 'tel:+15552039481' },
      { label: 'Email', value: 'join@forgeathletics.com', href: 'mailto:join@forgeathletics.com' },
      { label: 'Address', value: '1250 Market Street, Suite 4, Austin, TX' },
      { label: 'Hours', value: 'Mon-Fri 5:00am-10:00pm · Sat-Sun 6:00am-6:00pm' }
    ]
  },
  map: {
    title: 'Find Forge Athletics Club',
    address: '1250 Market Street, Suite 4, Austin, TX',
    embedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-97.750%2C30.260%2C-97.730%2C30.280&layer=mapnik'
  },
  cta: {
    eyebrow: 'Free trial pass',
    title: 'Claim your free trial week and meet your coach.',
    description:
      'Experience coach-led sessions, training-floor atmosphere, and app onboarding before choosing your membership tier.',
    primaryLabel: 'Start Free Trial',
    primaryHref: '#contact',
    secondaryLabel: 'View Membership Plans',
    secondaryHref: '#pricing'
  },
  transformation: {
    eyebrow: 'Transformation framework',
    title: 'From inconsistency to disciplined, measurable training progress.',
    description: 'We combine strength programming, nutritional guidance, and weekly accountability to drive visible change.',
    beforeLabel: 'Before joining Forge',
    afterLabel: 'After coached transformation cycle',
    beforeDescription: 'Irregular workouts, low confidence, and no system for progression or recovery.',
    afterDescription: 'Consistent sessions, tracked progression, visible physique changes, and higher daily energy.'
  },
  socialProof: {
    eyebrow: 'Community momentum',
    title: 'PRs, transformations, and team sessions shared daily.',
    description: 'Members join for results and stay for the culture: focused sessions, coach energy, and shared progress.',
    items: [
      { title: 'Coach-led circuit block', handle: '@forgeathletics', description: 'High-intensity class footage and real workout pacing.' },
      { title: 'Member transformation wins', handle: '@forgeathletics', description: 'Before/after milestones that build confidence and trust.' },
      { title: 'Weekly schedule drops', handle: '@forgeathletics', description: 'Fast updates so members stay booked and consistent.' },
      { title: 'Training floor atmosphere', handle: '@forgeathletics', description: 'Premium lighting, equipment, and authentic gym energy.' }
    ]
  }
};
