import { MapPin } from 'lucide-react';

import { SectionContainer } from '@/components/layout/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import type { MapConfig } from '@/types/content';

interface MapSectionProps {
  map: MapConfig;
}

export function MapSection({ map }: MapSectionProps) {
  return (
    <SectionContainer>
      <SectionHeader eyebrow="Location" title={map.title} description={map.address} />
      <div className="mt-10 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        {map.embedUrl ? (
          <iframe
            title={map.title}
            src={map.embedUrl}
            loading="lazy"
            className="h-[360px] w-full border-0 sm:h-[420px]"
          />
        ) : (
          <Card className="rounded-none border-0 bg-gradient-to-br from-card via-card to-muted/30 shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-accent" />
                {map.address}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">Embed a location map here when the business address is ready.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </SectionContainer>
  );
}
