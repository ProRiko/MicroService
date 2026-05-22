import { Apple, CircleCheckBig, Dumbbell, Target, Users } from 'lucide-react';

import ResponsiveImage from '@/components/media/ResponsiveImage';
import { SectionContainer } from '@/components/layout/section-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import type { ServiceItem } from '@/types/content';

interface ServicesGridProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

const iconMap = {
  Dumbbell,
  Users,
  Apple,
  Target
};

export function ServicesGrid({ eyebrow, title, description, items }: ServicesGridProps) {
  return (
    <SectionContainer id="services">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = (item.icon ? iconMap[item.icon as keyof typeof iconMap] : undefined) ?? CircleCheckBig;

          return (
            <Card key={item.title} className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              {item.image ? (
                <div className="relative h-44 overflow-hidden border-b border-border/60">
                  <ResponsiveImage
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>
              ) : null}
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
