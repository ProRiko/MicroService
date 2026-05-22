export interface OfferItem {
  id: string;
  title: string;
  description?: string;
  code?: string;
}

export function activeOffers(offers: OfferItem[] | undefined) {
  if (!offers || offers.length === 0) return [];
  return offers.filter(() => true);
}

export default { activeOffers };
