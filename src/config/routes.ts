export const homeRoute = '/';

export const demoRoutes = ['gym', 'cafe', 'restaurant', 'salon', 'hotel'] as const;

export const seoRoutes = ['/robots.txt', '/sitemap.xml'] as const;

export const clientRoutePrefix = '/client';

export function getDemoRoutePaths() {
  return demoRoutes.map((route) => `/demo/${route}`);
}

export function getStaticRoutePaths() {
  return [homeRoute, ...getDemoRoutePaths(), ...seoRoutes];
}
