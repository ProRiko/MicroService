'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import type { NavItem } from '@/types/content';

interface MobileMenuProps {
  open: boolean;
  navItems: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  onClose: () => void;
}

export function MobileMenu({ open, navItems, ctaLabel, ctaHref, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.18 }}
          className="fixed left-3 right-3 top-16 z-40 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-3xl border border-border bg-card/98 p-4 shadow-soft backdrop-blur-xl lg:hidden"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Menu
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={ctaHref} className="mt-4 h-12 w-full justify-center">
            {ctaLabel}
          </ButtonLink>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
