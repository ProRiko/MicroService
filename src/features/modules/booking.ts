export interface BookingModuleConfig {
  provider?: string;
  href?: string;
}

export function bookingHref(cfg: BookingModuleConfig) {
  if (!cfg?.href) return undefined;
  return cfg.href;
}

const bookingModule = { bookingHref };

export default bookingModule;
