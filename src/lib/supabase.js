// The Supabase client, for when lib/api.js reads from Supabase instead of
// src/data. Not imported anywhere yet. The URL and anon key go in .env.local
// (see .env.example).
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set: copy them from the Supabase project into .env.local.");
}

// The site only reads public content, so there's no sign-in session to keep.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// Supabase errors carry database jargon; pages show a plain message instead.
export function unwrap({ data, error }, fallback = "Couldn't load this right now.") {
  if (error) {
    console.warn("[supabase]", error.message);
    throw new Error(fallback);
  }
  return data;
}
