# Platform Architecture (Overview)

- `src/templates/shared/industry-template.tsx` — Central renderer composing sections from `TemplateContent`.
- `src/content/demo/*` — Demo content used to seed new clients.
- `src/config/clients` — Client blueprint helpers, registry, and generators for rapid onboarding.
- `src/config/industries` — Presets and recommended sections per industry.
- `src/lib/cms` — Adapter layer for local and future headless CMS integrations.
- `src/lib/seo` — Schema and metadata builders.
- `src/components/conversion` — Conversion-focused UI modules (WhatsApp, booking, CTAs).
- `public/images/clients` — Place client-specific images here for predictable asset paths.

Goals:
- Enable onboarding by data/config only (no code edits).
- Prepare for CI-driven builds and CMS integrations.
- Keep templates thin and data-driven to support multi-industry scaling.
