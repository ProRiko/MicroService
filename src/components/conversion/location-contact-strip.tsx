import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

interface LocationContactStripProps {
  phone: string;
  email: string;
  address: string;
}

export function LocationContactStrip({ phone, email, address }: LocationContactStripProps) {
  return (
    <div className="grid gap-3 rounded-3xl border border-border bg-muted/30 p-4 sm:grid-cols-3 sm:p-5">
      <Link href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-background">
        <Phone className="h-4 w-4 text-accent" />
        <span className="text-sm text-foreground">{phone}</span>
      </Link>
      <Link href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-background">
        <Mail className="h-4 w-4 text-accent" />
        <span className="text-sm text-foreground">{email}</span>
      </Link>
      <div className="flex items-center gap-3 rounded-2xl p-3">
        <MapPin className="h-4 w-4 text-accent" />
        <span className="text-sm text-foreground">{address}</span>
      </div>
    </div>
  );
}
