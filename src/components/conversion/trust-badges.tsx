import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { TrustBadgeItem } from '@/types/content';

interface TrustBadgesProps {
  items: TrustBadgeItem[];
  className?: string;
}

export function TrustBadges({ items, className }: TrustBadgesProps) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {items.map((item) => (
        <Badge key={item.label} className="border-border/70 bg-card/90 px-4 py-2 text-foreground shadow-sm">
          {item.label}
          {item.detail ? <span className="ml-2 text-muted-foreground normal-case tracking-normal">{item.detail}</span> : null}
        </Badge>
      ))}
    </div>
  );
}
