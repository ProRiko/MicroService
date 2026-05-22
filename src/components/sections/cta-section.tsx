import { ArrowRight } from 'lucide-react';

import { SectionContainer } from '@/components/layout/section-container';
import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CtaConfig } from '@/types/content';

interface CtaSectionProps {
  cta: CtaConfig;
}

export function CtaSection({ cta }: CtaSectionProps) {
  return (
    <SectionContainer>
      <Card className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_40%)]" />
        <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">{cta.eyebrow}</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{cta.title}</h2>
            <p className="max-w-2xl text-base leading-7 text-primary-foreground/80">{cta.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={cta.primaryHref} variant="secondary" size="lg" className="gap-2">
              {cta.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            {cta.secondaryHref ? (
              <ButtonLink href={cta.secondaryHref} variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                {cta.secondaryLabel ?? 'Learn More'}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}
