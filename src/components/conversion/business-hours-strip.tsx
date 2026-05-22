import { Clock3, MapPin, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';

interface BusinessHoursStripProps {
  title: string;
  hours: string;
  phone: string;
  address: string;
  className?: string;
}

export function BusinessHoursStrip({ title, hours, phone, address, className }: BusinessHoursStripProps) {
  return (
    <div className={cn('grid gap-4 rounded-3xl border border-border bg-card p-5 sm:grid-cols-3', className)}>
      <div className="flex items-start gap-3">
        <Clock3 className="mt-0.5 h-5 w-5 text-accent" />
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{hours}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Phone className="mt-0.5 h-5 w-5 text-accent" />
        <div>
          <p className="text-sm font-medium text-foreground">Call</p>
          <p className="text-sm text-muted-foreground">{phone}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <MapPin className="mt-0.5 h-5 w-5 text-accent" />
        <div>
          <p className="text-sm font-medium text-foreground">Visit</p>
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>
      </div>
    </div>
  );
}
