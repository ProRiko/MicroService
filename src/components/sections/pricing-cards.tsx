import { Check } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import { SectionContainer } from '@/components/layout/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import type { PricingItem } from '@/types/content';

interface PricingCardsProps {
  eyebrow: string;
  title: string;
  description: string;
  items: PricingItem[];
}

export function PricingCards({ eyebrow, title, description, items }: PricingCardsProps) {
  return (
    <SectionContainer id="pricing" className="bg-background">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.name} className={cn('group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-soft', item.featured && 'border-accent/40 shadow-soft')}>
            {item.featured ? (
              <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-sm">
                Popular
              </div>
            ) : null}
            <CardHeader>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.name}</p>
              <CardTitle className="text-3xl">{item.price}</CardTitle>
              <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink href={item.ctaHref} variant={item.featured ? 'primary' : 'outline'} className="w-full shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                {item.ctaLabel}
              </ButtonLink>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
