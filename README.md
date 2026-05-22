# Local Business Template Engine

A reusable, production-oriented Next.js App Router starter for a micro-agency that launches high-converting local business websites across multiple industries.

## What this repo is for

This codebase is structured as a template engine, not a single website. The system is built to support many industries, many client brands, and repeated launches with a shared foundation.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- ESLint
- Prettier

## Structure

- `src/app` for routes and metadata
- `src/components/layout` for shell components
- `src/components/sections` for reusable page blocks
- `src/components/ui` for primitive design-system components
- `src/content` for structured industry data
- `src/templates` for industry-specific composition
- `src/config` for site and metadata defaults
- `src/lib` for shared helpers
- `src/hooks` for reusable client hooks
- `src/styles` for global CSS and tokens

## Current demo

- `/demo/gym` renders the first premium fitness demo using reusable sections and centralized content.
- `/demo/cafe`, `/demo/restaurant`, `/demo/salon`, and `/demo/hotel` extend the same engine across other local business verticals.

## SEO and conversion infrastructure

- Dynamic route metadata and canonical URLs
- JSON-LD schema generation for local business, restaurant, and hotel demos
- Floating WhatsApp CTA and sticky mobile action bar
- Trust badges, review cards, booking CTA, business hours, and location strips

## Scaling strategy

1. Add a new industry content file under `src/content/demo/<industry>/`.
2. Create or reuse a template under `src/templates/<vertical>/`.
3. Compose the reusable sections with the new content object.
4. Add a route under `src/app/demo/<industry>/page.tsx`.

## Launching a client quickly

1. Copy the closest industry content object.
2. Replace the brand, services, testimonials, pricing, and contact data.
3. Swap the metadata values.
4. Update the route slug and deploy.

For a new client, the typical workflow is:

1. Duplicate the nearest `src/content/demo/<industry>` config.
2. Add or adjust the matching template wrapper under `src/templates`.
3. Swap assets and business details.
4. Publish the new route.

## Notes

- The project is configured for SEO-friendly metadata and semantic composition.
- The current gallery and map sections are intentionally generic so they can be swapped for real assets and embeds per client.
- To run locally, install dependencies and use the scripts in `package.json`.
