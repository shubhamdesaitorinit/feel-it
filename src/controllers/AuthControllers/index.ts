import { supabase } from "@supabaseClient/Auth";

export const getAuthSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
