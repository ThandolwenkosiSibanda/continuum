// Runs after `vite build` for GitHub Pages (npm run build:pages).
// Pages has no rewrite rules, so an address like /continuum/work/proqit would be
// a 404. Pages serves 404.html for any missing address, so a copy of the app
// there opens the right page. .nojekyll stops Pages running the files through
// Jekyll.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
fs.copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));
fs.writeFileSync(path.join(dist, ".nojekyll"), "");
fs.rmSync(path.join(dist, ".htaccess"), { force: true }); // Apache only
console.log("dist/ is ready for GitHub Pages (404.html, .nojekyll)");
