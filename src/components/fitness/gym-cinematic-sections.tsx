import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

import ResponsiveImage from '@/components/media/ResponsiveImage';
import { SectionContainer } from '@/components/layout/section-container';
import { ButtonLink } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import type {
  ClassScheduleItem,
  CtaConfig,
  EquipmentItem,
  HeroMedia,
  HeroStatsItem,
  MobileAppBlock,
  ProofItem,
  TrainerItem,
  TransformationStatItem,
  TrustBadgeItem,
  TransformationStoryItem
} from '@/types/content';

interface GymHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  media?: HeroMedia;
  stats: HeroStatsItem[];
  proofItems?: ProofItem[];
  trustBadges?: TrustBadgeItem[];
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
}

export function GymCinematicHero({
  eyebrow,
  title,
  description,
  media,
  stats,
  proofItems,
  trustBadges,
  primaryCta,
  secondaryCta
}: GymHeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-4 sm:pb-16 sm:pt-8 lg:pb-24 lg:pt-12">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_5%,rgba(249,115,22,0.22),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(239,68,68,0.2),transparent_34%),linear-gradient(180deg,#08080a_0%,#0f0f10_38%,#111216_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="container-shell grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-12">
        <div className="order-2 space-y-6 text-white lg:order-1 lg:space-y-8">
          <Badge className="border-white/20 bg-white/10 text-white">{eyebrow}</Badge>
          <div className="space-y-4 sm:space-y-5">
            <h1 className="font-display max-w-[11ch] text-[clamp(2.4rem,9vw,4.25rem)] font-semibold leading-[0.96] tracking-tight text-white sm:max-w-2xl sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="max-w-xl text-[0.98rem] leading-7 text-zinc-200 sm:max-w-2xl sm:text-lg">{description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.primaryHref} size="lg" className="h-12 justify-between gap-2 bg-accent text-white shadow-[0_18px_48px_rgba(249,115,22,0.35)] hover:bg-accent/90 sm:justify-center">
              {primaryCta.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            {secondaryCta?.secondaryHref ? (
              <ButtonLink
                href={secondaryCta.secondaryHref}
                size="lg"
                variant="outline"
                className="h-12 border-white/25 bg-white/5 text-white hover:bg-white/12"
              >
                {secondaryCta.secondaryLabel ?? 'View Programs'}
              </ButtonLink>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.35rem] border border-white/15 bg-white/6 p-3 backdrop-blur-xl sm:grid-cols-3 sm:gap-4 sm:p-5">
            {stats.map((item) => (
              <div key={item.label} className="space-y-1 rounded-2xl border border-white/10 bg-black/20 p-3 sm:rounded-none sm:border-r sm:border-white/12 sm:bg-transparent sm:pr-3 sm:last:border-r-0 sm:last:pr-0 sm:p-0">
                <p className="text-xl font-semibold tracking-tight text-white sm:text-3xl">{item.value}</p>
                <p className="text-[0.62rem] uppercase tracking-[0.18em] text-zinc-300 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {trustBadges?.length ? (
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-2.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.13em] text-zinc-200 sm:px-3 sm:text-xs"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
                  {badge.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative order-1 lg:order-2">
          <Card className="relative overflow-hidden border-white/10 bg-black p-0 shadow-[0_28px_85px_rgba(0,0,0,0.55)]">
            <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[32rem]">
              {media ? (
                <ResponsiveImage
                  fill
                  priority
                  src={media.image}
                  alt={media.alt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />

              {proofItems?.length ? (
                <div className="absolute bottom-3 left-3 right-3 grid gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:grid-cols-2 sm:gap-3">
                  {proofItems.slice(0, 2).map((proof) => (
                    <div key={proof.label} className="rounded-2xl border border-white/12 bg-white/12 p-3 text-white backdrop-blur-xl sm:p-4">
                      <p className="text-[0.62rem] uppercase tracking-[0.16em] text-zinc-300 sm:text-xs">{proof.label}</p>
                      <p className="mt-2 text-xl font-semibold sm:text-2xl">{proof.value}</p>
                      {proof.description ? <p className="mt-1 text-[0.72rem] leading-5 text-zinc-200 sm:text-xs">{proof.description}</p> : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface TransformationStatsProps {
  eyebrow: string;
  title: string;
  description: string;
  items: TransformationStatItem[];
}

export function TransformationStatsSection({ eyebrow, title, description, items }: TransformationStatsProps) {
  return (
    <SectionContainer id="transformation-stats" className="pt-0">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-7 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <Card key={item.label} className="group overflow-hidden border-white/10 bg-zinc-950 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 sm:p-6">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-zinc-400 sm:text-sm">{item.label}</p>
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.value}</p>
              {item.detail ? <p className="text-sm leading-6 text-zinc-300">{item.detail}</p> : null}
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

interface TrainerShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  items: TrainerItem[];
}

export function TrainerShowcaseSection({ eyebrow, title, description, items }: TrainerShowcaseProps) {
  return (
    <SectionContainer id="trainers" className="bg-zinc-950/95">
      <div className="space-y-4">
        <Badge className="border-orange-400/35 bg-orange-500/15 text-orange-200">{eyebrow}</Badge>
        <div className="space-y-3">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">{description}</p>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((trainer) => (
          <Card key={trainer.name} className="group overflow-hidden border-white/10 bg-zinc-900/80 p-0 text-white">
            <div className="relative h-64 overflow-hidden sm:h-72">
              <ResponsiveImage
                src={trainer.image}
                alt={trainer.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            </div>
            <div className="space-y-4 p-4 sm:p-5">
              <div>
                <p className="text-lg font-semibold sm:text-xl">{trainer.name}</p>
                <p className="text-[0.65rem] uppercase tracking-[0.15em] text-orange-300 sm:text-sm">{trainer.role}</p>
              </div>
              <p className="text-sm leading-6 text-zinc-300">{trainer.coachingStyle}</p>
              <div className="space-y-2 text-sm text-zinc-200">
                <p className="font-medium text-white">Specialties</p>
                <p>{trainer.specialties.join(' • ')}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {trainer.certifications.map((cert) => (
                  <span key={cert} className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.12em] text-zinc-200">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

interface EquipmentShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  items: EquipmentItem[];
}

export function EquipmentShowcaseSection({ eyebrow, title, description, items }: EquipmentShowcaseProps) {
  return (
    <SectionContainer id="equipment">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {items.map((item, index) => (
          <Card
            key={item.title}
            className={cn(
              'group relative overflow-hidden border-border/80 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft',
              index === 0 ? 'lg:col-span-2' : ''
            )}
          >
            <div className={cn('relative', index === 0 ? 'h-[18rem] sm:h-[24rem]' : 'h-[16rem] sm:h-80')}>
              <ResponsiveImage
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/12 bg-black/45 p-4 text-white backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-5">
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-200">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

interface ClassScheduleProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ClassScheduleItem[];
  image: string;
}

export function ClassScheduleSection({ eyebrow, title, description, items, image }: ClassScheduleProps) {
  return (
    <SectionContainer id="schedule" className="bg-muted/20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          <div className="space-y-3 rounded-[1.5rem] border border-border/70 bg-card p-3 shadow-soft sm:p-5">
            {items.map((item) => (
              <div key={item.day} className="rounded-2xl border border-border/60 bg-background/80 p-3 sm:p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent sm:text-sm">{item.day}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.sessions.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden p-0">
          <div className="relative min-h-[22rem] sm:min-h-[30rem]">
            <ResponsiveImage
              src={image}
              alt="Gym class schedule in action"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/14 bg-black/45 p-4 text-white backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-zinc-300 sm:text-xs">Prime-time sessions</p>
              <p className="mt-2 text-base font-semibold sm:text-lg">Morning and evening class blocks built around real work schedules.</p>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

interface TransformationStoriesProps {
  eyebrow: string;
  title: string;
  description: string;
  items: TransformationStoryItem[];
}

export function TransformationStoriesSection({ eyebrow, title, description, items }: TransformationStoriesProps) {
  return (
    <SectionContainer id="transformations">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-6">
        {items.map((story) => (
          <Card key={story.name} className="overflow-hidden border-border/70 p-0">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr_1.1fr]">
              <div className="relative h-48 sm:h-60 lg:h-full">
                <ResponsiveImage
                  src={story.beforeImage}
                  alt={`${story.name} before`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">Before</p>
                <p className="absolute bottom-3 left-3 text-xs font-medium text-white sm:bottom-4 sm:left-4 sm:text-sm">{story.beforeStat}</p>
              </div>
              <div className="relative h-48 sm:h-60 lg:h-full">
                <ResponsiveImage
                  src={story.afterImage}
                  alt={`${story.name} after`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute left-3 top-3 rounded-full border border-white/15 bg-orange-500/80 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">After</p>
                <p className="absolute bottom-3 left-3 text-xs font-medium text-white sm:bottom-4 sm:left-4 sm:text-sm">{story.afterStat}</p>
              </div>
              <div className="space-y-4 p-5 sm:p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-accent sm:text-sm">{story.timeline}</p>
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{story.name}</h3>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">{story.program}</p>
                <p className="text-sm leading-7 text-muted-foreground">{story.summary}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

interface MobileAppProps {
  app: MobileAppBlock;
}

export function MobileAppCtaSection({ app }: MobileAppProps) {
  return (
    <SectionContainer id="mobile-app" className="bg-zinc-950">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-10">
        <div className="space-y-5 text-white">
          <Badge className="border-white/20 bg-white/10 text-white">{app.eyebrow}</Badge>
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{app.title}</h2>
            <p className="max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">{app.description}</p>
          </div>
          <div className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
            {['Daily workout tracking', 'In-app coach check-ins', 'Class booking + waitlist', 'Nutrition and habit logs'].map((line) => (
              <p key={line} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-300" />
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={app.primaryHref} size="lg" className="h-12 bg-accent text-white shadow-[0_18px_45px_rgba(249,115,22,0.35)] hover:bg-accent/90">
              {app.primaryLabel}
            </ButtonLink>
            {app.secondaryHref ? (
              <ButtonLink href={app.secondaryHref} variant="outline" size="lg" className="h-12 border-white/25 bg-white/6 text-white hover:bg-white/14">
                {app.secondaryLabel ?? 'Learn More'}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <Card className="relative overflow-hidden border-white/10 bg-black p-0">
          <div className="relative min-h-[22rem] sm:min-h-[26rem]">
            <ResponsiveImage
              src={app.image}
              alt="Gym mobile app mockup"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

interface FreeTrialCtaProps {
  cta: CtaConfig;
}

export function FreeTrialCtaSection({ cta }: FreeTrialCtaProps) {
  return (
    <SectionContainer id="free-trial">
      <Card className="relative overflow-hidden border-orange-500/20 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_34%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">{cta.eyebrow}</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{cta.title}</h2>
            <p className="text-base leading-7 text-zinc-300">{cta.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={cta.primaryHref} size="lg" className="gap-2 bg-accent text-white shadow-[0_18px_45px_rgba(249,115,22,0.35)] hover:bg-accent/90">
              {cta.primaryLabel}
              <Sparkles className="h-4 w-4" />
            </ButtonLink>
            {cta.secondaryHref ? (
              <ButtonLink href={cta.secondaryHref} size="lg" variant="outline" className="border-white/25 bg-white/8 text-white hover:bg-white/14">
                {cta.secondaryLabel ?? 'See Details'}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}

interface WhatsAppBandProps {
  phone: string;
}

export function WhatsAppJoinBand({ phone }: WhatsAppBandProps) {
  const href = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <SectionContainer id="whatsapp-join" className="pt-0">
      <Card className="border-green-500/30 bg-green-950/95 p-4 text-white sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-green-200 sm:text-xs">Fastest way to join</p>
            <p className="mt-1 text-base font-semibold sm:text-lg">Message our onboarding team on WhatsApp and lock your free trial slot.</p>
          </div>
          <ButtonLink href={href} className="gap-2 bg-green-500 text-white hover:bg-green-400" size="lg" target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Join on WhatsApp
          </ButtonLink>
        </div>
      </Card>
    </SectionContainer>
  );
}
