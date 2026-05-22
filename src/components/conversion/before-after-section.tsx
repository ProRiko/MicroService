import { SectionContainer } from '@/components/layout/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';

interface BeforeAfterSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDescription: string;
  afterDescription: string;
}

export function BeforeAfterSection({
  eyebrow,
  title,
  description,
  beforeLabel,
  afterLabel,
  beforeDescription,
  afterDescription
}: BeforeAfterSectionProps) {
  return (
    <SectionContainer className="bg-muted/20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Before</p>
            <CardTitle>{beforeLabel}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-7 text-muted-foreground">{beforeDescription}</p>
          </CardContent>
        </Card>
        <Card className="border-accent/20 shadow-soft">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">After</p>
            <CardTitle>{afterLabel}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-7 text-muted-foreground">{afterDescription}</p>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
