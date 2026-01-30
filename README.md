# Simple React Router Dashboard

A small practice project demonstrating React Router nested routes, route params, data fetching, and a minimal dashboard UI.

## Tech stack
- React + Vite
- react-router-dom
- Tailwind CSS
- JSONPlaceholder API (for users)

## Folder structure
- src/
  - layouts/ (dashboard layout)
  - Dashboard/ (dashboard pages)
  - Pages/ (landing & auth pages)
  - Components/ (shared components)
  - api/ (API helpers)
  - context/ (simple auth state)

## Routes
- `/` → Landing page
- `/login` → Login page
- `/signup` → Signup page
- `/dashboard` → Dashboard home (requires login)
- `/dashboard/users` → Users list (search filter)
- `/dashboard/users/:id` → User details
- `/dashboard/analytics` → Analytics placeholder
- `/dashboard/settings` → Settings form

## How to run
1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Open `http://localhost:5173`

Notes: This project uses a simple state-based auth (no backend). Use Login or Signup to enter the dashboard.
