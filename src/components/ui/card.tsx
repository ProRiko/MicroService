import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('card-shell overflow-hidden', className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-2 p-6 sm:p-8', className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pb-6 sm:px-8 sm:pb-8', className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-xl font-semibold tracking-tight text-foreground', className)} {...props} />;
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm leading-6 text-muted-foreground', className)} {...props} />;
}

interface MediaCardProps {
  className?: string;
  children: ReactNode;
}

export function MediaCard({ className, children }: MediaCardProps) {
  return <div className={cn('card-shell p-6 sm:p-8', className)}>{children}</div>;
}
