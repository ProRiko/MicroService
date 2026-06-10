# Database Design

The target schema is relational and tenant-scoped.

```mermaid
erDiagram
  TENANTS ||--o{ USERS : has
  TENANTS ||--o{ CUSTOMERS : owns
  TENANTS ||--o{ APPOINTMENTS : schedules
  TENANTS ||--o{ SERVICES : offers
  TENANTS ||--o{ WEBSITE_CONTENT : publishes
  TENANTS ||--o{ ACTIVITY_LOGS : records
  CUSTOMERS ||--o{ APPOINTMENTS : books
  SERVICES ||--o{ APPOINTMENTS : used_by

  TENANTS {
    uuid id PK
    text slug
    text name
    text industry
    text plan
    text timezone
    timestamptz created_at
    timestamptz updated_at
  }

  USERS {
    uuid id PK
    uuid tenant_id FK
    text role
    text name
    text email
    timestamptz created_at
    timestamptz updated_at
  }

  CUSTOMERS {
    uuid id PK
    uuid tenant_id FK
    text name
    text email
    text phone
    text notes
    timestamptz last_interaction_at
    text lead_status
    timestamptz created_at
    timestamptz updated_at
  }

  APPOINTMENTS {
    uuid id PK
    uuid tenant_id FK
    uuid customer_id FK
    uuid service_id FK
    timestamptz scheduled_at
    text status
    text notes
    timestamptz created_at
    timestamptz updated_at
  }

  SERVICES {
    uuid id PK
    uuid tenant_id FK
    text name
    text description
    integer duration_minutes
    numeric price
    boolean is_active
    timestamptz created_at
    timestamptz updated_at
  }

  WEBSITE_CONTENT {
    uuid tenant_id PK
    text business_name
    text logo_url
    text hero_title
    text hero_description
    text contact_email
    text contact_phone
    text opening_hours
    jsonb service_highlights
    timestamptz updated_at
  }

  ACTIVITY_LOGS {
    uuid id PK
    uuid tenant_id FK
    uuid actor_user_id FK
    text action
    text subject_type
    uuid subject_id
    jsonb metadata
    timestamptz created_at
  }
```

## Notes

- Every row should carry `tenant_id` for isolation.
- PostgreSQL is the target store for production.
- The current in-memory repository is only a scaffold for local development.