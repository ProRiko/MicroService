'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import { MobileMenu } from '@/components/layout/mobile-menu';
import type { NavItem } from '@/types/content';
import { cn } from '@/lib/utils';

interface NavbarProps {
  brand: string;
  navItems: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export function Navbar({ brand, navItems, ctaLabel, ctaHref, className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl', className)}>
      <div className="container-shell relative flex h-18 items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          {brand}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={ctaHref} size="sm">
            {ctaLabel}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" />
        </button>

        <MobileMenu
          open={mobileOpen}
          navItems={navItems}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
}
