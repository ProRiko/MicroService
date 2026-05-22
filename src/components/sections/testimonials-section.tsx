import { Star } from 'lucide-react';

import { SectionContainer } from '@/components/layout/section-container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import type { TestimonialItem } from '@/types/content';

interface TestimonialsSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: TestimonialItem[];
}

export function TestimonialsSection({ eyebrow, title, description, items }: TestimonialsSectionProps) {
  return (
    <SectionContainer id="testimonials" className="bg-muted/20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <div className="flex gap-1 text-accent" aria-label={`${item.rating ?? 5} star rating`}>
                {Array.from({ length: item.rating ?? 5 }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-7 text-foreground">“{item.quote}”</p>
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
