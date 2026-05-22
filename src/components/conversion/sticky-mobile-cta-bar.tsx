import { Phone, CalendarDays, MessageCircle } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';

interface StickyMobileCtaBarProps {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function StickyMobileCtaBar({ primaryLabel, primaryHref, secondaryLabel, secondaryHref }: StickyMobileCtaBarProps) {
  const isWhatsApp = Boolean(secondaryHref?.includes('wa.me'));

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/90 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 rounded-[1.5rem] border border-border/70 bg-card/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
        <ButtonLink href={primaryHref} className="flex-1 gap-2 shadow-sm" size="md">
          <CalendarDays className="h-4 w-4" />
          {primaryLabel}
        </ButtonLink>
        {secondaryHref ? (
          <ButtonLink href={secondaryHref} variant="outline" className="flex-1 gap-2 border-border/70 bg-background/80" size="md">
            {isWhatsApp ? <MessageCircle className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
            {secondaryLabel ?? 'Call'}
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
