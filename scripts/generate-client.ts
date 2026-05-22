/**
 * Simple generator script to scaffold a new client content file.
 * Usage: `ts-node ./scripts/generate-client.ts "My Gym" gym`
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import type { ClientBlueprint } from '../src/config/clients';
import persistent from '../src/config/clients/persistent';
import { cafeTemplateContent, gymTemplateContent, hotelTemplateContent, restaurantTemplateContent, salonTemplateContent } from '../src/content/demo';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: ts-node ./scripts/generate-client.ts "Client Name" [industryKey]');
  process.exit(2);
}

const [label, industryInput = 'gym'] = args;
const industry = (industryInput || 'gym').toLowerCase();
const selectedIndustry = ['gym', 'cafe', 'restaurant', 'salon', 'hotel'].includes(industry) ? industry : 'gym';
const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const dir = resolve(process.cwd(), 'src', 'content', 'clients');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const demoMap = {
  gym: gymTemplateContent,
  cafe: cafeTemplateContent,
  restaurant: restaurantTemplateContent,
  salon: salonTemplateContent,
  hotel: hotelTemplateContent
} as const;

const demo = demoMap[selectedIndustry as keyof typeof demoMap] ?? gymTemplateContent;

const filePath = resolve(dir, `${slug}.ts`);
const content = `import type { TemplateContent } from '@/types/content';
import { ${selectedIndustry}TemplateContent as demo } from '@/content/demo/${selectedIndustry}';

export const ${slug}Content: TemplateContent = {
  ...demo,
  brand: { ...demo.brand, name: '${label}' },
  seo: { ...demo.seo, title: '${label}' }
};

export default ${slug}Content;
`;

writeFileSync(filePath, content, { encoding: 'utf8' });
console.log('Wrote', filePath);
// Add to persistent clients registry
try {
  const item = {
    industry: selectedIndustry,
    slug: `/client/${slug}`,
    label,
    content: {
      ...demo,
      brand: { ...demo.brand, name: label },
      seo: { ...demo.seo, title: label }
    }
  };
  persistent.appendPersistentClient(item as ClientBlueprint);
  console.log('Registered client in data/clients.json');
} catch (error) {
  console.warn('Failed to register client in persistent store', error);
}
