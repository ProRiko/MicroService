import { Mail, MapPin, Phone, Clock3 } from 'lucide-react';

import { SectionContainer } from '@/components/layout/section-container';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SectionHeader } from '@/components/ui/section-header';
import { Textarea } from '@/components/ui/textarea';
import type { ContactItem, CtaConfig } from '@/types/content';

interface ContactSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ContactItem[];
  cta: CtaConfig;
}

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock3
};

export function ContactSection({ eyebrow, title, description, items, cta }: ContactSectionProps) {
  return (
    <SectionContainer id="contact">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-card via-card to-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">Contact details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => {
              const Icon = iconMap[item.label as keyof typeof iconMap] ?? MapPin;

              const content = (
                <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/70 p-3 shadow-sm backdrop-blur">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block transition-transform duration-200 hover:-translate-y-0.5">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="rounded-2xl">
                  {content}
                </div>
              );
            })}
            <ButtonLink href={cta.primaryHref} className="w-full shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
              {cta.primaryLabel}
            </ButtonLink>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-border/70 bg-card/95 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">Request an intro</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Name" aria-label="Name" />
                <Input placeholder="Email" type="email" aria-label="Email" />
              </div>
              <Input placeholder="Phone" aria-label="Phone" />
              <Textarea placeholder="Tell us what you are looking for" aria-label="Message" />
              <ButtonLink href={cta.primaryHref} className="w-full shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                Send Inquiry
              </ButtonLink>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
