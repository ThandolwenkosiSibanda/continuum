# Continuum Creative Agency website

React (Vite + React Router). The original static HTML site is kept in
`_static-original/` for reference.

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production files in dist/
npm run preview   # serve dist/ locally
```

## Where things live

| | |
|---|---|
| `src/pages/` | One component per page (Home, Works, Project, Services, Service, About, Insights, Post, Contact) |
| `src/components/` | Header, mobile menu, footer, and shared pieces (`ui.jsx`), animations (`motion.jsx`) |
| `src/data/` | The content: projects, services, industries, process steps, posts |
| `src/lib/api.js` | The only place pages get content from |
| `public/assets/` | Styles, fonts and images, served as-is (`continuum.css` holds our styles) |

Addresses: `/work/<project-slug>`, `/services/<service-slug>`,
`/insights/<post-slug>`, and `/work?industry=Retail` for a filtered Work page.
Old addresses (`works.html`, `about.html`…) redirect to the new ones.

## Adding content

Add a row to the file in `src/data/` (later, a row in Supabase). A new project
appears in the menus, home page, Work page and footer automatically. On a
project page, the case-study sections (challenge, solution, features, how it's
built, why custom) only show when the row fills them in; Proqit has them all.

## Moving the content to Supabase

1. Run `supabase/schema.sql` in the Supabase SQL editor.
2. Run `supabase/seed.sql` to load the current content (`npm run seed-sql`
   regenerates it from `src/data`).
3. Copy `.env.example` to `.env.local` and fill in the project URL and anon key.
4. In `src/lib/api.js`, replace the body of each function with the query in its
   comment, e.g.

   ```js
   import { supabase, unwrap } from "@/lib/supabase";

   export async function getProjects() {
     return unwrap(await supabase.from("projects").select("*").order("sort_order"));
   }
   ```

Pages already show a loading state and a "try again" message, so nothing else
changes. Images can stay in `public/assets/images` or move to Supabase Storage;
either way the row holds the image URL.

## Hosting

### GitHub Pages (https://&lt;username&gt;.github.io/continuum/)

`npm run build:pages` builds for the `/continuum/` sub-folder and adds what
Pages needs: `404.html` (a copy of the app, so links like `/continuum/work/proqit`
open directly) and `.nojekyll`.

- **Automatic:** push the repo to GitHub as `continuum`, then in Settings → Pages
  set Source to "GitHub Actions". `.github/workflows/pages.yml` builds and
  publishes on every push to `main`.
- **By hand:** run `npm run build:pages` and publish the contents of `dist/`
  (e.g. on a `gh-pages` branch).

The folder name is in the `build:pages` script (`--base=/continuum/`); if the
repo has another name, change it there.

### Custom domain (later)

Change `--base=/continuum/` to `--base=/` in the `build:pages` script, add a
`public/CNAME` file containing the domain (e.g. `cca.co.zw`), and set the domain
in Settings → Pages.

### Apache / cPanel

`npm run build` and upload `dist/`. `public/.htaccess` sends every address to
`index.html`.
