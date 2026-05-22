import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/70 bg-muted/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground shadow-sm',
        className
      )}
      {...props}
    />
  );
}
