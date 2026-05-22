import type { Metadata } from 'next';
import { Manrope, Space_Grotesk, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';

import { createMetadata } from '@/config/metadata';
import { defaultSeo } from '@/config/site';
import '@/styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

export const metadata: Metadata = createMetadata(defaultSeo);

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
