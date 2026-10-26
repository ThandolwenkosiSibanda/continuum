// The one module pages call for data. For now every function reads the files in
// src/data; each is async and returns rows shaped like the Supabase tables
// (supabase/schema.sql), so moving to Supabase means replacing the body of each
// function with the query in its comment. Nothing else in the site changes.
//
//   import { supabase, unwrap } from "@/lib/supabase";

import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { processSteps } from "@/data/processSteps";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const bySortOrder = (a, b) => a.sort_order - b.sort_order;
// Hand back copies, as a network response would, so pages can't change the source.
const rows = (list) => structuredClone([...list].sort(bySortOrder));
const row = (item) => (item ? structuredClone(item) : null);

// ─── Projects ─────────────────────────────────────────────────────────────────

// supabase.from("projects").select("*").order("sort_order")
export async function getProjects() {
  return rows(projects);
}

// supabase.from("projects").select("*").eq("slug", slug).maybeSingle()
export async function getProject(slug) {
  return row(projects.find((p) => p.slug === slug));
}

// The project after this one, wrapping round to the first.
// supabase.from("projects").select("slug, name, tagline").gt("sort_order", order).order("sort_order").limit(1)
export async function getNextProject(slug) {
  const list = rows(projects);
  const i = list.findIndex((p) => p.slug === slug);
  return i === -1 ? null : list[(i + 1) % list.length];
}

// supabase.from("projects").select("*").in("slug", slugs)
export async function getProjectsBySlugs(slugs) {
  return rows(projects.filter((p) => slugs.includes(p.slug))).sort(
    (a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug),
  );
}

// supabase.from("industries").select("*").order("sort_order")
export async function getIndustries() {
  return rows(industries);
}

// ─── Services ─────────────────────────────────────────────────────────────────

// supabase.from("services").select("*").order("sort_order")
export async function getServices() {
  return rows(services);
}

// supabase.from("services").select("*").eq("slug", slug).maybeSingle()
export async function getService(slug) {
  return row(services.find((s) => s.slug === slug));
}

// supabase.from("process_steps").select("*").order("sort_order")
export async function getProcessSteps() {
  return rows(processSteps);
}

// ─── Insights ─────────────────────────────────────────────────────────────────

// supabase.from("posts").select("slug, title, excerpt, industry, project_slug, cover, cover_alt").order("sort_order")
export async function getPosts() {
  return rows(posts).map(({ body, ...post }) => post);
}

// supabase.from("posts").select("*").eq("slug", slug).maybeSingle()
export async function getPost(slug) {
  return row(posts.find((p) => p.slug === slug));
}

// ─── Header and footer ────────────────────────────────────────────────────────

// Everything the menus and footer list, loaded once for the whole site.
export async function getSiteIndex() {
  const [projectList, serviceList, industryList] = await Promise.all([getProjects(), getServices(), getIndustries()]);
  return { projects: projectList, services: serviceList, industries: industryList };
}
