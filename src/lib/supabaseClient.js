import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
console.log("SUPABASE_URL =", process.env.REACT_APP_SUPABASE_URL);
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_ANON_KEY (check .env.local)"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);