export { defaultNavigation, defaultSeo, siteConfig } from './site';
export { getIndustryTheme, industryThemes } from './themes';
export { createClientBlueprint } from './clients';
export { default as clientRegistry } from './clients/registry';
export * as clientGenerator from './clients/generator';
export * as industryPresets from './industries/presets';
export { bootstrapClientRegistry } from './clients/bootstrap';
export { getDemoBlueprints } from './clients/seed';
export { getDemoRoutePaths, getStaticRoutePaths, homeRoute, seoRoutes } from './routes';
