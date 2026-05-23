export interface WhatsAppConfig {
  phone: string;
  prefill?: string;
}

export function renderWhatsAppHref(cfg: WhatsAppConfig) {
  const base = `https://wa.me/${cfg.phone.replace(/[^0-9]/g, '')}`;
  if (!cfg.prefill) return base;
  return `${base}?text=${encodeURIComponent(cfg.prefill)}`;
}

const whatsappModule = { renderWhatsAppHref };

export default whatsappModule;
