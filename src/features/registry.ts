type FeatureKey =
  | 'whatsapp'
  | 'booking'
  | 'reservation'
  | 'promotions'
  | 'announcement'
  | 'business-hours'
  | 'social-proof'
  | 'faq'
  | 'multi-location'
  | 'reviews';

interface FeatureEntry {
  key: FeatureKey;
  enabled: boolean;
  config?: Record<string, unknown>;
}

const features = new Map<FeatureKey, FeatureEntry>();

export function registerFeature(entry: FeatureEntry) {
  features.set(entry.key, entry);
}

export function isFeatureEnabled(key: FeatureKey) {
  const e = features.get(key);
  return e ? e.enabled : false;
}

export function getFeatureConfig(key: FeatureKey) {
  return features.get(key)?.config;
}

export function listFeatures() {
  return Array.from(features.values());
}

export default { registerFeature, isFeatureEnabled, getFeatureConfig, listFeatures };
