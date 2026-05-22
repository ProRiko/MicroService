import { MessageCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface FloatingWhatsAppCTAProps {
  phone: string;
  className?: string;
  label?: string;
}

export function FloatingWhatsAppCTA({ phone, className, label = 'Chat on WhatsApp' }: FloatingWhatsAppCTAProps) {
  const href = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-green-500 md:inline-flex',
        className
      )}
      aria-label={label}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
