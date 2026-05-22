# Client Onboarding

1. Create a new client blueprint
   - Use `src/config/clients/generator.ts` -> `createClientConfig(content, label)`
   - Register the blueprint in memory: `clientRegistry.registerClient(blueprint)`
2. Add images
   - Place assets under `public/images/clients/{slug}`
3. Verify content
   - Ensure `content.seo`, `content.brand`, and `content.business` are filled
4. Deploy
   - Push to Git and run CI which will build and deploy the site

Notes:
- For CMS integration, implement an adapter under `src/lib/cms/adapters/` and swap the active adapter.
- Use `clientGenerator.generateNavigationFromContent` and `generateClientMetadata` to automate metadata and nav.
