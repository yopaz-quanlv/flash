# CMS Monorepo Example

This repository contains a sample CMS with two Next.js applications and a Golang API.

## Structure

```
/
├─ frontend-user/      # Next.js SSR/SSG website
├─ frontend-admin/     # Next.js SPA admin dashboard
├─ backend-api/        # Golang API using Gin & GORM
├─ shared/             # Shared types/interfaces
├─ docker-compose.yml
└─ package.json
```

## Development

Copy `.env.example` in each service to `.env` and run:

```bash
docker-compose up --build
```

The applications will be available at:
- User site: <http://localhost:3000>
- Admin site: <http://localhost:3001>
- API: <http://localhost:8080>

## Environment variables

- Backend uses `DB_DSN` for MySQL connection.
- Frontends use `NEXT_PUBLIC_API_URL` to reach the API (`http://localhost:8080` inside Docker).
