# Platform Architecture

```mermaid
flowchart LR
	Public[Public website] --> Content[Website content]
	Public --> Demo[Industry demos]
	Admin[Authenticated dashboard] --> CRM[Customers]
	Admin --> Booking[Appointments]
	Admin --> Activity[Activity logs]
	Admin --> Content
	API[Route handlers] --> Repo[Repository boundary]
	Repo --> Memory[In-memory scaffold]
	Repo --> Postgres[(PostgreSQL target)]
	Repo --> Spring[Future Java services]
	AI[Future AI services] --> Python[Python boundary]
```

## Current shape

- `src/app/page.tsx` now positions MicroService as a multi-tenant operating system.
- `src/app/auth/*` provides the first sign-in and tenant bootstrap flow.
- `src/app/dashboard/*` exposes customer, appointment, and website content workspaces.
- `src/app/api/*` contains the first thin route handlers for auth and tenant data.
- `src/services/platform/*` owns the repository boundary and workspace seeding.
- `src/types/platform.ts` defines the tenant-scoped domain model.

## Migration goals

- Keep UI components reusable and presentational.
- Move persistence behind a PostgreSQL repository without changing route contracts.
- Split business services into Java Spring Boot when the backend grows.
- Keep AI-specific services separate in Python.
