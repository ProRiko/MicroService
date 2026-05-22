import type { CSSProperties } from 'react';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { SectionContainer } from '@/components/layout/section-container';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesGrid } from '@/components/sections/services-grid';
import { PricingCards } from '@/components/sections/pricing-cards';
import { GallerySection } from '@/components/sections/gallery-section';
import { FaqSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';
import { MapSection } from '@/components/sections/map-section';
import { CtaSection } from '@/components/sections/cta-section';
import { FloatingWhatsAppCTA } from '@/components/conversion/floating-whatsapp-cta';
import { StickyMobileCtaBar } from '@/components/conversion/sticky-mobile-cta-bar';
import { TrustBadges } from '@/components/conversion/trust-badges';
import { BusinessHoursStrip } from '@/components/conversion/business-hours-strip';
import { LocationContactStrip } from '@/components/conversion/location-contact-strip';
import { ReviewCards } from '@/components/conversion/review-cards';
import { BeforeAfterSection } from '@/components/conversion/before-after-section';
import { BookingCta } from '@/components/conversion/booking-cta';
import { InstagramProofSection } from '@/components/conversion/instagram-proof-section';
import { SectionHeader } from '@/components/ui/section-header';
import { StructuredData } from '@/components/seo';
import { buildSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';
import type { TemplateContent } from '@/types/content';

export type IndustrySectionKey =
  | 'services'
  | 'reviews'
  | 'pricing'
  | 'gallery'
  | 'faq'
  | 'contact'
  | 'map'
  | 'cta'
  | 'transformation'
  | 'booking'
  | 'hours'
  | 'location'
  | 'socialProof';

interface IndustryTemplateProps {
  content: TemplateContent;
  sectionOrder?: IndustrySectionKey[];
}

const defaultSectionOrder: IndustrySectionKey[] = ['services', 'reviews', 'pricing', 'gallery', 'faq', 'contact', 'map', 'cta'];

function renderSection(key: IndustrySectionKey, content: TemplateContent) {
  switch (key) {
    case 'services':
      return <ServicesGrid {...content.services} />;
    case 'reviews':
      return <ReviewCards {...content.testimonials} />;
    case 'pricing':
      return <PricingCards {...content.pricing} />;
    case 'gallery':
      return <GallerySection {...content.gallery} />;
    case 'faq':
      return <FaqSection {...content.faq} />;
    case 'contact':
      return <ContactSection {...content.contact} cta={content.cta} />;
    case 'map':
      return <MapSection map={content.map} />;
    case 'cta':
      return <CtaSection cta={content.cta} />;
    case 'transformation':
      return content.transformation ? <BeforeAfterSection {...content.transformation} /> : null;
    case 'booking':
      return content.business?.bookingHref ? (
        <SectionContainer>
          <BookingCta
            title={content.cta.title}
            description={content.cta.description}
            label={content.cta.primaryLabel}
            href={content.business.bookingHref}
          />
        </SectionContainer>
      ) : null;
    case 'hours':
      return content.brand.hours ? (
        <SectionContainer>
          <BusinessHoursStrip
            title="Business hours"
            hours={content.brand.hours}
            phone={content.brand.phone}
            address={content.brand.address}
          />
        </SectionContainer>
      ) : null;
    case 'location':
      return (
        <SectionContainer>
          <LocationContactStrip phone={content.brand.phone} email={content.brand.email} address={content.brand.address} />
        </SectionContainer>
      );
    case 'socialProof':
      return content.socialProof ? <InstagramProofSection {...content.socialProof} /> : null;
    default:
      return null;
  }
}

export function IndustryTemplate({ content, sectionOrder = defaultSectionOrder }: IndustryTemplateProps) {
  const themeStyle = content.theme
    ? ({
        '--theme-primary': content.theme.primary,
        '--theme-accent': content.theme.accent
      } as CSSProperties)
    : undefined;

  return (
    <div className={cn('min-h-screen bg-background text-foreground', `industry-${content.key}`)} style={themeStyle} data-industry={content.key}>
      <StructuredData data={buildSchema(content)} />
      <Navbar
        brand={content.brand.name}
        navItems={content.nav}
        ctaLabel={content.hero.primaryCta.primaryLabel}
        ctaHref={content.hero.primaryCta.primaryHref}
      />
      <main className={cn('relative isolate overflow-hidden')}>
        <div className={cn('pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-gradient-to-b', content.theme?.gradient ?? 'from-slate-950/5 via-transparent to-transparent')} />
        <HeroSection
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          media={content.hero.media}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
          stats={content.hero.stats}
        />

        {(content.trustBadges || content.brand.hours || content.brand.address) ? (
          <SectionContainer className="pt-0">
            <div className="space-y-4">
              {content.trustBadges ? <TrustBadges items={content.trustBadges} /> : null}
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <LocationContactStrip phone={content.brand.phone} email={content.brand.email} address={content.brand.address} />
                <BusinessHoursStrip
                  title="Business hours"
                  hours={content.brand.hours}
                  phone={content.brand.phone}
                  address={content.brand.address}
                />
              </div>
            </div>
          </SectionContainer>
        ) : null}

        {sectionOrder.map((sectionKey) => (
          <div key={sectionKey}>{renderSection(sectionKey, content)}</div>
        ))}
      </main>
      <Footer brand={content.brand} navItems={content.nav} />
      {content.business?.whatsapp ? <FloatingWhatsAppCTA phone={content.business.whatsapp} /> : null}
      <StickyMobileCtaBar
        primaryLabel={content.cta.primaryLabel}
        primaryHref={content.cta.primaryHref}
        secondaryLabel={content.cta.secondaryLabel}
        secondaryHref={content.cta.secondaryHref ?? content.business?.bookingHref}
      />
    </div>
  );
}
