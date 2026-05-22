# Debugging Guide

## Next.js App Router Rules

- Server components are the default. Add `use client` only when you need browser APIs, state, effects, or event handlers.
- Keep shared templates server-safe when possible. Prefer direct imports for server-rendered sections.
- Use `generateMetadata` only in route files. Keep it pure and derived from content/config.
- Prefer `notFound()` for missing content instead of rendering partial broken pages.

## Route Debugging

- Route registry lives in `src/config/routes.ts`.
- Validate demo and SEO routes with `npm run test:routes` against a running dev server.
- Use `npm run validate` to check route registry, metadata generation, content completeness, and component rendering.

## Hydration Debugging

- Compare server-rendered and client-rendered output for mismatched content.
- Avoid rendering time-dependent values during SSR unless they are fixed or formatted in one place.
- Do not wrap server-safe components in unnecessary client-only wrappers.
- If a section uses browser-only APIs, isolate it behind a small client component boundary.

## Deployment Debugging

- Run `npm run typecheck` before build.
- Run `npm run build` to catch App Router and metadata issues.
- In CI, ensure the persistent client registry file is present if you rely on generated clients.
- If routes are missing in production, confirm bootstrap logic loads persistent clients before generating static params.

## Testing Workflow

- `npm run validate` checks internal health:
  - route registry
  - metadata generation
  - demo content completeness
  - component rendering
- `npm run test:routes` checks live endpoints on a running dev server.
- `npm run typecheck` catches TypeScript and route typing issues.
- `npm run lint` keeps imports and component patterns clean.

## Common Issues

- Missing client data: check `data/clients.json` and the client generator output in `src/content/clients/`.
- Broken metadata: inspect `src/config/metadata.ts` and the route's `generateMetadata` function.
- Hydration mismatches: check for client-only logic in server-rendered components.
- Invalid route output: review `src/config/routes.ts` and `src/lib/health.ts`.
