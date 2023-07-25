import { type Session } from "@supabase/supabase-js";
import { supabase } from "@supabaseClient/Auth";

export const getAuthSession = async (): Promise<Session | null> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
