import { CalendarDays } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BookingCtaProps {
  title: string;
  description: string;
  label: string;
  href: string;
}

export function BookingCta({ title, description, label, href }: BookingCtaProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-slate-950 to-emerald-950 text-primary-foreground shadow-[0_24px_70px_rgba(15,23,42,0.24)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_32%)]" />
      <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Reservation</p>
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
          <p className="max-w-2xl text-sm leading-7 text-primary-foreground/80">{description}</p>
        </div>
        <ButtonLink href={href} variant="secondary" className="gap-2 shadow-[0_16px_40px_rgba(15,23,42,0.2)]">
          <CalendarDays className="h-4 w-4" />
          {label}
        </ButtonLink>
      </div>
    </Card>
  );
}
