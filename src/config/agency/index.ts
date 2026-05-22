export interface PricingPackage {
  id: string;
  name: string;
  priceMonthly?: number;
  priceOneTime?: number;
  features: string[];
}

export const defaultPackages: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Starter',
    priceOneTime: 499,
    features: ['Template setup', 'Basic SEO', '1 location']
  },
  {
    id: 'growth',
    name: 'Growth',
    priceOneTime: 1299,
    features: ['Everything in Starter', '3 locations', 'Advanced SEO', 'Booking integration']
  },
  {
    id: 'pro',
    name: 'Pro',
    priceOneTime: 2999,
    features: ['Everything in Growth', 'Multi-location', 'Custom integrations', 'Priority support']
  }
];

export const onboardingChecklist = [
  'Collect business profile and logo',
  'Add high-quality images to public/images/clients/{slug}',
  'Verify phone, whatsapp, and booking links',
  'Set up domain and DNS',
  'Run a production deploy and verify analytics'
];

export default { defaultPackages, onboardingChecklist };
