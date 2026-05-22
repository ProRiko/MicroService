import { Star } from 'lucide-react';

import ResponsiveImage from '@/components/media/ResponsiveImage';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { SectionContainer } from '@/components/layout/section-container';
import type { TestimonialItem } from '@/types/content';

interface ReviewCardsProps {
  eyebrow: string;
  title: string;
  description: string;
  items: TestimonialItem[];
}

export function ReviewCards({ eyebrow, title, description, items }: ReviewCardsProps) {
  return (
    <SectionContainer>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.name} className="group border-accent/10 bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: item.rating ?? 5 }).map((_, index) => (
                    <Star key={`${item.name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-border/70 bg-muted">
                  {item.avatar ? (
                    <ResponsiveImage
                      src={item.avatar}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-6 text-foreground">“{item.quote}”</p>
              <div>
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
