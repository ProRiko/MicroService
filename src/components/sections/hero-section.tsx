import { ArrowRight } from 'lucide-react';

import ResponsiveImage from '@/components/media/ResponsiveImage';
import { ButtonLink } from '@/components/ui/button';
import { SectionContainer } from '@/components/layout/section-container';
import { Badge } from '@/components/ui/badge';
import type { CtaConfig, HeroMedia, HeroStatsItem } from '@/types/content';

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
  stats: HeroStatsItem[];
  media?: HeroMedia;
}

export function HeroSection({ eyebrow, title, description, primaryCta, secondaryCta, stats, media }: HeroSectionProps) {
  return (
    <SectionContainer className="overflow-hidden pt-8 sm:pt-12 lg:pt-18">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-b from-card via-card to-muted/30 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_36%)]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="space-y-8 py-3 sm:py-5 lg:py-8">
            <div className="space-y-5">
              <Badge className="border-accent/20 bg-accent/10 text-accent shadow-sm">{eyebrow}</Badge>
              <div className="space-y-4">
                <h1 className="font-display max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                  {title}
                </h1>
                <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.primaryHref} size="lg" className="gap-2 shadow-[0_18px_40px_rgba(16,185,129,0.2)]">
                {primaryCta.primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              {secondaryCta?.secondaryHref ? (
                <ButtonLink href={secondaryCta.secondaryHref} variant="outline" size="lg" className="border-border/70 bg-background/70 backdrop-blur">
                  {secondaryCta.secondaryLabel ?? 'Learn More'}
                </ButtonLink>
              ) : null}
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-[1.75rem] border border-border/70 bg-background/80 p-4 shadow-soft backdrop-blur sm:gap-4 sm:p-5">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1 border-r border-border/60 pr-3 last:border-r-0 last:pr-0">
                  <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
            {media ? (
              <>
                <ResponsiveImage fill src={media.image} alt={media.alt} priority className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/28 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-950/70 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                  Premium training
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
                  <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 text-white backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Studio snapshot</p>
                    <p className="mt-2 text-lg font-medium leading-7">Real energy, strong light, and a layout that feels like the brand already exists.</p>
                    {media.caption ? <p className="mt-2 text-sm leading-6 text-white/70">{media.caption}</p> : null}
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[1.25rem] border border-white/12 bg-slate-950/55 p-4 text-white backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/55">Today&apos;s conversion</p>
                      <p className="mt-2 text-2xl font-semibold">+28%</p>
                    </div>
                    <div className="rounded-[1.25rem] border border-white/12 bg-white/10 p-4 text-white backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/55">Active members</p>
                      <p className="mt-2 text-2xl font-semibold">240+</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative flex h-full min-h-[520px] items-end bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_32%)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/55">Today&apos;s focus</p>
                      <p className="mt-1 font-medium text-white">Trial bookings + membership signups</p>
                    </div>
                    <div className="rounded-2xl bg-white/12 px-4 py-3 text-right shadow-sm">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/55">Conversion</p>
                      <p className="text-lg font-semibold text-emerald-300">+28%</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: 'Weekly classes', value: '18' },
                      { label: 'Coaches on staff', value: '6' },
                      { label: 'Avg. response time', value: '< 10m' },
                      { label: 'Active members', value: '240+' }
                    ].map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
                        <p className="text-sm text-white/65">{metric.label}</p>
                        <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                    <p className="text-sm font-medium text-white">Premium website engine</p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Mobile-first structure, SEO-ready layout, and reusable content blocks designed for rapid client launches.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
