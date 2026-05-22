import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section id={id} className={cn('section-shell', className)}>
      <div className="container-shell">{children}</div>
    </section>
  );
}
