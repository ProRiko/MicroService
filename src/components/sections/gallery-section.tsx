import ResponsiveImage from '@/components/media/ResponsiveImage';
import { SectionContainer } from '@/components/layout/section-container';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import type { GalleryItem } from '@/types/content';

interface GallerySectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

const toneStyles: Record<GalleryItem['tone'], string> = {
  light: 'bg-gradient-to-br from-slate-100 to-white text-slate-900',
  dark: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white',
  accent: 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-slate-900 text-white'
};

export function GallerySection({ eyebrow, title, description, items }: GallerySectionProps) {
  return (
    <SectionContainer className="bg-muted/20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <Card key={item.title} className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <div className="relative min-h-[22rem]">
              {item.image ? (
                <>
                  <ResponsiveImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </>
              ) : (
                <div className={cn('absolute inset-0 flex flex-col justify-end p-6', toneStyles[item.tone])} />
              )}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className={cn('rounded-[1.5rem] border border-white/12 p-5 backdrop-blur-xl', item.image ? 'bg-white/10 text-white' : toneStyles[item.tone])}>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">{item.title}</p>
                    {item.description ? <p className="text-sm leading-6 opacity-90">{item.description}</p> : null}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
