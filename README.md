# Jake Morris Drums

Official website for Jake Morris.

This project includes a Supabase-backed show management system with a lightweight admin interface for managing upcoming performances.

---

## Tech Stack

- **Frontend:** React
- **Database & Auth:** Supabase
- **Hosting:** Vercel
- **CI Keepalive:** GitHub Actions (cron job)

---

# Show Management System

The site includes a protected admin route that allows management of upcoming shows.

## Admin Access

Admin route:
https://www.jakemorrisdrums.com/front242

Enter Password

After authentication, users can:

- Add new shows
- Delete shows
- Manage upcoming events
- See changes reflected immediately on `https://www.jakemorrisdrums.com/upcoming-shows`

---

## Show Data Structure

Shows are stored in Supabase and typically include:

- Artist
- Venue
- City
- Date
- Bill details
- External URL

Data is fetched dynamically and rendered on the Upcoming Shows page.

---

# Supabase Configuration

This project uses Supabase for:

- Authentication
- Database storage
- REST API access

Environment variables (local development):
REACT_APP_SUPABASE_URL=
REACT_APP_SUPABASE_ANON_KEY=

These must be defined in `.env.local`.

---

# Supabase Auto-Pause Prevention

Supabase free-tier projects automatically pause after 7 days of database inactivity.

To prevent this project from being paused, a GitHub Actions workflow runs daily and performs a minimal database request.

## Keepalive Strategy

A Postgres RPC function is created:

```sql
create or replace function public.keepalive()
returns int
language sql
as $$
  select 1;
$$;

grant execute on function public.keepalive() to anon;