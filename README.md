# MicroService

MicroService is a multi-tenant business operating platform for small businesses. It combines a public website layer with a tenant dashboard for CRM, appointment management, and website content control.

## What is in the repo now

- Public landing page positioned around the SaaS platform.
- Auth scaffold with sign in, sign up, logout, and session lookup routes.
- Protected dashboard routes for customers, appointments, and business content.
- Thin API handlers for dashboard and tenant data.
- A tenant-scoped domain model and repository boundary for future PostgreSQL storage.

## Screenshots

Add screenshots of these screens as the product evolves:

- Home page
- Login page
- Dashboard overview
- Customers module
- Appointments module
- Website content module

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the system map and migration path.

See [docs/DATABASE.md](docs/DATABASE.md) for the relational schema design.

See [docs/API.md](docs/API.md) for the current API contract.

## Setup

1. Install dependencies.
2. Copy `.env.example` to `.env.local` and adjust values if needed.
3. Run `npm run dev`.

## Environment variables

- `NEXT_PUBLIC_APP_NAME` - Display name for the app.
- `NEXT_PUBLIC_APP_URL` - Public base URL.
- `AUTH_SECRET` - Placeholder secret for future signed auth flows.
- `DATABASE_URL` - PostgreSQL connection string for the future database-backed repository.
- `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` - Local database defaults for Docker.

## Docker

- `Dockerfile` builds and runs the Next.js app.
- `docker-compose.yml` starts the app and a local PostgreSQL container.

## Roadmap

- Replace the in-memory repository with PostgreSQL.
- Add CRUD mutations for customers, appointments, and services.
- Add role-based authorization policies.
- Add billing, analytics, and AI service boundaries.
