-- Tables for the website's content, matching the rows in src/data/*.js.
-- Run this once in the Supabase SQL editor, then load the content with
-- supabase/seed.sql (npm run seed-sql regenerates it from src/data).
-- Visitors can read everything; changes are made from the Supabase dashboard
-- (or anything using the service-role key), never from the website.

create table industries (
  name text primary key,
  icon text not null,                  -- Remix Icon class, e.g. 'ri-store-2-line'
  sort_order int not null default 0
);

create table projects (
  slug text primary key,               -- the address: /work/<slug>
  name text not null,
  tagline text not null,               -- 'Hardware point of sale and stock'
  industry text not null references industries (name) on update cascade,
  icon text not null,
  cover text not null,                 -- image URL (or a Supabase Storage public URL)
  phone_screen text,                   -- a home-screen screenshot, for the phone mockups
  summary text not null,               -- the paragraph in the home page showcase
  title text,                          -- the project page heading; defaults to the name
  lead text,
  platform text,
  services_label text,
  challenge_title text,
  challenge_text text,
  solution_title text,
  solution_text text,
  features jsonb not null default '[]',   -- [{ icon, title, text }]
  screens jsonb not null default '[]',    -- [{ image, caption }]
  tech_title text,
  tech text[] not null default '{}',
  tech_points text[] not null default '{}',
  why jsonb not null default '[]',        -- [{ icon, title, text }]
  sort_order int not null default 0
);

create table services (
  slug text primary key,               -- the address: /services/<slug>
  name text not null,
  icon text not null,
  nav_text text not null,              -- under the name in the header menu
  list_text text not null,             -- under the name in the home page list
  summary text not null,
  bullets text[] not null default '{}',       -- home page
  card_bullets text[] not null default '{}',  -- Services page cards
  seen_in text[] not null default '{}',       -- project slugs
  title text,
  lead text,
  hero_phones text[],                  -- three project slugs: left, centre, right
  included_title text,
  included jsonb,                      -- [{ icon, title, text }]
  steps_title text,
  steps jsonb,                         -- [{ title, text }]; empty uses process_steps
  built_with text[],
  related text[],                      -- project slugs; empty uses seen_in
  related_label text,
  faq_title text,
  faq jsonb,                           -- [{ question, answer }]
  sort_order int not null default 0
);

create table process_steps (
  id bigint generated always as identity primary key,
  title text not null,
  text text not null,
  sort_order int not null default 0
);

create table posts (
  slug text primary key,               -- the address: /insights/<slug>
  title text not null,
  excerpt text not null,
  lead text,
  industry text not null references industries (name) on update cascade,
  project_slug text references projects (slug) on update cascade on delete set null,
  cover text not null,
  cover_alt text not null default '',
  body jsonb,                          -- blocks; see src/data/posts.js
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Public, read-only.
alter table industries enable row level security;
alter table projects enable row level security;
alter table services enable row level security;
alter table process_steps enable row level security;
alter table posts enable row level security;

create policy "Anyone can read industries" on industries for select using (true);
create policy "Anyone can read projects" on projects for select using (true);
create policy "Anyone can read services" on services for select using (true);
create policy "Anyone can read process steps" on process_steps for select using (true);
create policy "Anyone can read posts" on posts for select using (true);
