import { SectionContainer } from '@/components/layout/section-container';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';

interface InstagramProofItem {
  title: string;
  handle: string;
  description: string;
}

interface InstagramProofSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: InstagramProofItem[];
}

export function InstagramProofSection({ eyebrow, title, description, items }: InstagramProofSectionProps) {
  return (
    <SectionContainer>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Card key={`${item.handle}-${index}`} className="overflow-hidden p-0">
            <div className="flex min-h-64 flex-col justify-end bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">{item.handle}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
