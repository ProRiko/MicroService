export interface BookingModuleConfig {
  provider?: string;
  href?: string;
}

export function bookingHref(cfg: BookingModuleConfig) {
  if (!cfg?.href) return undefined;
  return cfg.href;
}

export default { bookingHref };
