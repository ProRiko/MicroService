import Link from 'next/link';
import { ArrowRight, Building2, Coffee, Hotel, Scissors, Dumbbell, Sparkles, UtensilsCrossed } from 'lucide-react';

import ResponsiveImage from '@/components/media/ResponsiveImage';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionHeader } from '@/components/ui/section-header';
import { siteConfig } from '@/config/site';
import { getVisualAssets } from '@/config/visuals';

const visuals = {
  gym: getVisualAssets('gym'),
  cafe: getVisualAssets('cafe'),
  restaurant: getVisualAssets('restaurant'),
  salon: getVisualAssets('salon'),
  hotel: getVisualAssets('hotel')
};

const industries = [
  {
    label: 'Gym',
    href: '/demo/gym',
    icon: Dumbbell,
    tone: 'from-slate-950 via-slate-900 to-emerald-950',
    description: 'High-conversion fitness and training sites.',
    image: visuals.gym.hero.image
  },
  {
    label: 'Cafe',
    href: '/demo/cafe',
    icon: Coffee,
    tone: 'from-stone-950 via-amber-950 to-orange-950',
    description: 'Warm, local, menu-led cafe experiences.',
    image: visuals.cafe.hero.image
  },
  {
    label: 'Restaurant',
    href: '/demo/restaurant',
    icon: UtensilsCrossed,
    tone: 'from-red-950 via-amber-950 to-stone-950',
    description: 'Reservation-first dining brands.',
    image: visuals.restaurant.hero.image
  },
  {
    label: 'Salon',
    href: '/demo/salon',
    icon: Scissors,
    tone: 'from-fuchsia-950 via-rose-950 to-slate-950',
    description: 'Beauty and appointment-driven bookings.',
    image: visuals.salon.hero.image
  },
  {
    label: 'Hotel',
    href: '/demo/hotel',
    icon: Hotel,
    tone: 'from-slate-950 via-slate-900 to-amber-950',
    description: 'Hospitality and direct booking systems.',
    image: visuals.hotel.hero.image
  }
];

const workflow = [
  { step: '1', title: 'Swap the config', description: 'Replace brand, service, imagery, and SEO data in one content file.' },
  { step: '2', title: 'Choose a template', description: 'Pick the industry wrapper that matches the client vertical.' },
  { step: '3', title: 'Deploy quickly', description: 'Launch the new client with minimal code changes and fast QA.' }
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <SectionContainer className="pt-8 sm:pt-12 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge className="border-accent/20 bg-accent/10 text-accent">Premium Local Business Website Systems</Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Launch premium local business websites without rebuilding the stack every time.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  {siteConfig.description} The system is structured for rapid deployment across fitness, food, beauty, hospitality, and other local verticals.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo/gym" size="lg" className="gap-2">
                View Demo Engine
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#industries" variant="outline" size="lg">
                Explore Industries
              </ButtonLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '5', label: 'Industry demos' },
                { value: '1', label: 'Reusable architecture' },
                { value: '90+', label: 'Lighthouse target' }
              ].map((item) => (
                <Card key={item.label} className="p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <p className="font-display text-3xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-border/70 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <div className="relative min-h-[34rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.16),_transparent_34%)]" />
              <div className="relative space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Agency stack</p>
                <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight">Built for fast, premium client launches.</h2>
                <p className="max-w-lg text-sm leading-7 text-white/75">
                  Content-driven templates, conversion-focused sections, and route-based demos that can be swapped per industry.
                </p>
              </div>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                <div className="relative col-span-2 overflow-hidden rounded-[1.75rem] border border-white/10">
                  <ResponsiveImage
                    src={visuals.gym.hero.image}
                    alt={visuals.gym.hero.alt}
                    width={1200}
                    height={800}
                    className="h-[16rem] w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Premium demo preview
                  </div>
                </div>
                {[
                  { icon: Building2, label: 'Centralized business config' },
                  { icon: Sparkles, label: 'Theme-driven visual systems' },
                  { icon: Hotel, label: 'SEO-ready hospitality support' },
                  { icon: Coffee, label: 'Multi-industry demo routing' }
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm font-medium text-white">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </SectionContainer>

      <SectionContainer id="industries" className="bg-muted/20">
        <SectionHeader
          eyebrow="Industries"
          title="Reusable demos for the local business verticals that book most often"
          description="Each demo uses the same engine, but the content, ordering, and visual mood are tuned for the industry."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link key={industry.label} href={industry.href} className="group block">
                <Card className="overflow-hidden border-border/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-soft">
                  <div className="relative h-40 overflow-hidden">
                    <ResponsiveImage
                      src={industry.image}
                      alt={industry.label}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${industry.tone} opacity-90`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_42%)]" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-lg font-semibold">{industry.label}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Premium demo</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm leading-6 text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader
          eyebrow="Workflow"
          title="Built for the fastest possible client handoff"
          description="The platform is designed so new launches usually mean content replacement, asset replacement, and deployment."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {workflow.map((item) => (
            <Card key={item.step} className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Step {item.step}</p>
              <CardTitle className="mt-3 text-2xl">{item.title}</CardTitle>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-20">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-primary-foreground shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_38%)]" />
          <div className="relative grid gap-6 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Agency-ready</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Send a premium local business site live with a few content changes.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-primary-foreground/80">
                The architecture is built around reusable sections, industry templates, structured SEO, and conversion-focused layouts.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href="/demo/gym" variant="secondary" size="lg">
                Open Gym Demo
              </ButtonLink>
              <ButtonLink href="/demo/hotel" variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Open Hotel Demo
              </ButtonLink>
            </div>
          </div>
        </Card>
      </SectionContainer>
    </main>
  );
}
