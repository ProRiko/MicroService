import { createMetadata } from '@/config/metadata';
import { bootstrapClientRegistry } from '@/config/clients/bootstrap';
import { getDemoRoutePaths, getStaticRoutePaths } from '@/config/routes';
import { gymTemplateContent } from '@/content/demo/gym';
import { cafeTemplateContent } from '@/content/demo/cafe';
import { restaurantTemplateContent } from '@/content/demo/restaurant';
import { salonTemplateContent } from '@/content/demo/salon';
import { hotelTemplateContent } from '@/content/demo/hotel';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IndustryTemplate } from '@/templates/shared/industry-template';

export interface HealthCheckResult {
  ok: boolean;
  checks: Array<{ name: string; ok: boolean; details?: string }>;
}

export function validateRouteRegistry() {
  const routes = getStaticRoutePaths();
  const expected = ['/', ...getDemoRoutePaths(), '/robots.txt', '/sitemap.xml'];
  const unique = new Set(routes);
  return {
    ok: unique.size === routes.length && expected.every((route) => routes.includes(route)),
    routes
  };
}

export function getValidationRoutes() {
  bootstrapClientRegistry();
  const clients = bootstrapClientRegistry().listClients();
  return [...getStaticRoutePaths(), ...clients.map((client) => client.slug)];
}

export function validateMetadataGeneration() {
  const metadata = [
    createMetadata(gymTemplateContent.seo),
    createMetadata(cafeTemplateContent.seo),
    createMetadata(restaurantTemplateContent.seo),
    createMetadata(salonTemplateContent.seo),
    createMetadata(hotelTemplateContent.seo)
  ];

  return metadata.every((entry) => Boolean(entry.title) && Boolean(entry.description));
}

export function validateDemoContent() {
  return [gymTemplateContent, cafeTemplateContent, restaurantTemplateContent, salonTemplateContent, hotelTemplateContent].every(
    (content) => Boolean(content.brand?.name) && Boolean(content.seo?.title) && Boolean(content.hero?.title)
  );
}

export function validateComponentRendering() {
  try {
    const markup = renderToStaticMarkup(createElement(IndustryTemplate, { content: gymTemplateContent }));
    return markup.length > 0;
  } catch (err) {
    return false;
  }
}

export function buildHealthSnapshot(): HealthCheckResult {
  const routeCheck = validateRouteRegistry();
  const metadataOk = validateMetadataGeneration();
  const contentOk = validateDemoContent();
  const renderOk = validateComponentRendering();

  const checks = [
    { name: 'route-registry', ok: routeCheck.ok },
    { name: 'metadata-generation', ok: metadataOk },
    { name: 'demo-content', ok: contentOk },
    { name: 'component-rendering', ok: renderOk }
  ];

  return {
    ok: checks.every((check) => check.ok),
    checks
  };
}
