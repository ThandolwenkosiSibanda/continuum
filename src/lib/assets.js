// The site can be published in a sub-folder (GitHub Pages: /continuum/) or at
// the root of a domain. Vite sets BASE_URL from the build's --base; image paths
// in the content start with "/" and get it put in front here. Full URLs (e.g.
// Supabase Storage) are left alone.
const BASE = import.meta.env.BASE_URL;

export const asset = (path) => (path?.startsWith("/") ? BASE + path.slice(1) : path);
