import { createClient } from "@supabase/supabase-js";

const projectUrl = process.env.REACT_APP_SUPABASE_PROJECT_URL as string;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;

export const supabase = createClient(projectUrl, supabaseAnonKey);
