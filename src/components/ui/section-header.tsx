import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? <Badge className="border-accent/20 bg-accent/10 text-accent">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
          {title}
        </h2>
        {description ? <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}
