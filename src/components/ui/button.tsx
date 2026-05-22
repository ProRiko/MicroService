import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground shadow-[0_16px_36px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-secondary/80',
  ghost: 'bg-transparent text-foreground hover:bg-muted',
  outline: 'border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:bg-muted'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base'
};

interface BaseButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface LinkButtonProps extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
