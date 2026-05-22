import Link from 'next/link';

import type { BrandConfig, NavItem } from '@/types/content';

interface FooterProps {
  brand: BrandConfig;
  navItems: NavItem[];
}

export function Footer({ brand, navItems }: FooterProps) {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="space-y-4">
            <p className="font-display text-2xl font-semibold tracking-tight text-foreground">{brand.name}</p>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">{brand.tagLine}</p>
            <p className="text-sm text-muted-foreground">{brand.hours}</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-foreground transition-colors hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <div className="space-y-2 text-sm text-foreground">
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{brand.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}. Built with a reusable local business template engine.
        </div>
      </div>
    </footer>
  );
}
