import type { CSSProperties } from 'react';

import { FloatingWhatsAppCTA } from '@/components/conversion/floating-whatsapp-cta';
import { StickyMobileCtaBar } from '@/components/conversion/sticky-mobile-cta-bar';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import {
  ClassScheduleSection,
  EquipmentShowcaseSection,
  FreeTrialCtaSection,
  GymCinematicHero,
  MobileAppCtaSection,
  TrainerShowcaseSection,
  TransformationStatsSection,
  TransformationStoriesSection,
  WhatsAppJoinBand
} from '@/components/fitness/gym-cinematic-sections';
import { ContactSection } from '@/components/sections/contact-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { MapSection } from '@/components/sections/map-section';
import { PricingCards } from '@/components/sections/pricing-cards';
import { ServicesGrid } from '@/components/sections/services-grid';
import { StructuredData } from '@/components/seo';
import { ReviewCards } from '@/components/conversion/review-cards';
import { buildSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';
import type { TemplateContent } from '@/types/content';

interface GymTemplateProps {
  content: TemplateContent;
}

export function GymTemplate({ content }: GymTemplateProps) {
  const themeStyle = content.theme
    ? ({
        '--theme-primary': content.theme.primary,
        '--theme-accent': content.theme.accent
      } as CSSProperties)
    : undefined;

  const whatsappHref = content.business?.whatsapp ? `https://wa.me/${content.business.whatsapp.replace(/\D/g, '')}` : undefined;

  return (
    <div className={cn('min-h-screen bg-background text-foreground industry-gym')} data-industry={content.key} style={themeStyle}>
      <StructuredData data={buildSchema(content)} />
      <Navbar
        brand={content.brand.name}
        navItems={content.nav}
        ctaLabel={content.hero.primaryCta.primaryLabel}
        ctaHref={content.hero.primaryCta.primaryHref}
      />

      <main className="relative isolate overflow-hidden">
        <GymCinematicHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          media={content.hero.media}
          stats={content.hero.stats}
          proofItems={content.proofItems}
          trustBadges={content.trustBadges}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
        />

        {content.transformationStats ? (
          <TransformationStatsSection
            eyebrow="Transformation statistics"
            title="High-accountability coaching that produces visible progress."
            description="Weekly tracking, coach oversight, and recovery protocols drive measurable outcomes across strength, body composition, and consistency."
            items={content.transformationStats}
          />
        ) : null}

        <PricingCards {...content.pricing} />

        {content.trainers ? (
          <TrainerShowcaseSection
            eyebrow="Coach team"
            title="Certified trainers who combine intensity with precise programming."
            description="Each coach leads by discipline, tracks your progression weekly, and adapts sessions to your performance and recovery profile."
            items={content.trainers}
          />
        ) : null}

        <ServicesGrid {...content.services} />

        {content.transformationStories ? (
          <TransformationStoriesSection
            eyebrow="Before and after"
            title="Transformation stories from members who stayed consistent."
            description="Real progress over 8 to 16 weeks through coached training blocks, nutrition guidance, and community accountability."
            items={content.transformationStories}
          />
        ) : null}

        {content.equipment ? (
          <EquipmentShowcaseSection
            eyebrow="Equipment showcase"
            title="Performance zones built for serious training output."
            description="From strength racks to athletic turf, every zone is designed for progression, coaching visibility, and athlete flow."
            items={content.equipment}
          />
        ) : null}

        {content.classSchedule ? (
          <ClassScheduleSection
            eyebrow="Class schedule"
            title="Morning and evening classes engineered for busy professionals."
            description="Choose from strength, conditioning, and hybrid sessions with clear intensity levels and coach supervision."
            items={content.classSchedule}
            image={content.gallery.items[0]?.image ?? '/images/demo/gym/schedule.jpg'}
          />
        ) : null}

        <ReviewCards {...content.testimonials} />
        <GallerySection {...content.gallery} />

        {content.mobileApp ? <MobileAppCtaSection app={content.mobileApp} /> : null}
        <FreeTrialCtaSection cta={content.cta} />

        {content.business?.whatsapp ? <WhatsAppJoinBand phone={content.business.whatsapp} /> : null}

        <ContactSection {...content.contact} cta={content.cta} />
        <MapSection map={content.map} />
      </main>

      <Footer brand={content.brand} navItems={content.nav} />

      {content.business?.whatsapp ? <FloatingWhatsAppCTA phone={content.business.whatsapp} label="Join Forge on WhatsApp" /> : null}
      <StickyMobileCtaBar
        primaryLabel="Start Free Trial"
        primaryHref={content.cta.primaryHref}
        secondaryLabel="Join WhatsApp"
        secondaryHref={whatsappHref}
      />
    </div>
  );
}
