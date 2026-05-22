import { ChevronDown } from 'lucide-react';

import { SectionContainer } from '@/components/layout/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import type { FaqItem } from '@/types/content';

interface FaqSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export function FaqSection({ eyebrow, title, description, items }: FaqSectionProps) {
  return (
    <SectionContainer className="bg-muted/20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <Card key={item.question}>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <CardTitle className="text-lg">{item.question}</CardTitle>
              <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
