# API Reference

This repository currently ships with thin route handlers that scaffold the platform API surface. They are intentionally small, so future services can replace them without changing the UI contract.

## Auth

- `POST /api/auth/login` signs in a demo account and sets the tenant session cookie.
- `POST /api/auth/sign-up` creates a new tenant workspace in the in-memory repository and signs the new owner in.
- `GET /api/auth/logout` clears the session cookie.
- `GET /api/auth/me` returns the current session payload when present.

## Platform data

- `GET /api/dashboard` returns the current tenant dashboard summary.
- `GET /api/customers` returns the current tenant CRM records.
- `GET /api/appointments` returns the current tenant appointment records.
- `GET /api/content` returns the current tenant website content.

## Next implementation steps

- Add `POST`, `PATCH`, and `DELETE` handlers for CRM and appointments.
- Move data access behind a PostgreSQL repository.
- Add tenant-aware authorization checks for each mutation.