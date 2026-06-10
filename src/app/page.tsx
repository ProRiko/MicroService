import Link from 'next/link';
import { ArrowRight, BarChart3, Building2, CalendarDays, Database, LayoutDashboard, Users2 } from 'lucide-react';

import ResponsiveImage from '@/components/media/ResponsiveImage';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionHeader } from '@/components/ui/section-header';
import { platformPositioning, platformRoutes } from '@/config/platform';
import { siteConfig } from '@/config/site';
import { getVisualAssets } from '@/config/visuals';

const visuals = {
  gym: getVisualAssets('gym'),
  cafe: getVisualAssets('cafe'),
  restaurant: getVisualAssets('restaurant'),
  salon: getVisualAssets('salon'),
  hotel: getVisualAssets('hotel')
};

const modules = [
  {
    icon: LayoutDashboard,
    title: 'Business dashboard',
    description: 'Track customers, appointments, leads, visits, and activity from one workspace.'
  },
  {
    icon: Users2,
    title: 'CRM',
    description: 'Manage customer records, notes, lead status, and interaction history per tenant.'
  },
  {
    icon: CalendarDays,
    title: 'Appointments',
    description: 'Support public booking flows, internal scheduling, and status-based operations.'
  },
  {
    icon: Database,
    title: 'Website content',
    description: 'Keep business profile, services, hours, and media in sync with the public website.'
  }
];

const industries = [
  { label: 'Gym', href: '/demo/gym', image: visuals.gym.hero.image },
  { label: 'Cafe', href: '/demo/cafe', image: visuals.cafe.hero.image },
  { label: 'Restaurant', href: '/demo/restaurant', image: visuals.restaurant.hero.image },
  { label: 'Salon', href: '/demo/salon', image: visuals.salon.hero.image },
  { label: 'Hotel', href: '/demo/hotel', image: visuals.hotel.hero.image }
];

const operatingModel = [
  {
    step: '1',
    title: 'One tenant, one workspace',
    description: 'Each business gets isolated data for customers, bookings, services, and content.'
  },
  {
    step: '2',
    title: 'Shared primitives, configurable industries',
    description: 'The same modules power multiple business verticals without duplicating logic.'
  },
  {
    step: '3',
    title: 'Backend-ready boundaries',
    description: 'Repositories, route handlers, and domain types are separated for future service extraction.'
  }
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <SectionContainer className="pt-8 sm:pt-12 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge className="border-accent/20 bg-accent/10 text-accent">Multi-tenant business operating platform</Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  {siteConfig.name} helps small businesses run the website and the back office in one system.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{platformPositioning}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={platformRoutes.authSignUp} size="lg" className="gap-2">
                Create tenant
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={platformRoutes.authLogin} variant="outline" size="lg">
                Open dashboard
              </ButtonLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '1', label: 'Tenant-aware platform' },
                { value: '4', label: 'Core business modules' },
                { value: '∞', label: 'Industry presets' }
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Platform preview</p>
                <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight">Website, CRM, bookings, and analytics under one roof.</h2>
                <p className="max-w-lg text-sm leading-7 text-white/75">
                  The current build already separates the tenant workspace, auth flow, dashboard summary, and content model.
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
                    Tenant workspace preview
                  </div>
                </div>
                {[
                  { icon: Building2, label: 'Business identity' },
                  { icon: BarChart3, label: 'Activity snapshots' },
                  { icon: Users2, label: 'Customer records' },
                  { icon: CalendarDays, label: 'Booking pipeline' }
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

      <SectionContainer id="modules" className="bg-muted/20">
        <SectionHeader
          eyebrow="Core modules"
          title="The platform is organized around reusable operational modules"
          description="Each module is modeled as a separate domain boundary so future Java and Python services can replace the current in-memory adapters cleanly."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <Card key={module.title} className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle>{module.title}</CardTitle>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{module.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader
          eyebrow="Operating model"
          title="Designed for multi-tenant growth, not one-off landing pages"
          description="The data model, repository boundary, and route structure are moving toward business workspaces instead of template-only pages."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {operatingModel.map((item) => (
            <Card key={item.step} className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Step {item.step}</p>
              <CardTitle className="mt-3 text-2xl">{item.title}</CardTitle>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="demos" className="bg-muted/20">
        <SectionHeader
          eyebrow="Public examples"
          title="Industry demos still matter, but they now sit underneath the platform"
          description="The public-facing templates remain useful as vertical examples and launch assets, while the platform owns the business data and workflows."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                    <div>
                      <p className="text-lg font-semibold">{industry.label}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">Public demo</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-sm leading-6 text-muted-foreground">Vertical example and marketing surface for the core platform.</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-20">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-primary-foreground shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_38%)]" />
          <div className="relative grid gap-6 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Extensible by design</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Build the SaaS once, then plug in real backend services as the platform grows.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-primary-foreground/80">
                The current repository now contains the first tenant, auth, dashboard, CRM, booking, and content boundaries needed for that migration path.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href={platformRoutes.dashboard} variant="secondary" size="lg">
                Open dashboard
              </ButtonLink>
              <ButtonLink href={platformRoutes.authSignUp} variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Create tenant
              </ButtonLink>
            </div>
          </div>
        </Card>
      </SectionContainer>
    </main>
  );
}
