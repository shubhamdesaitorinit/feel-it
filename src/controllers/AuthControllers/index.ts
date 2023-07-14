import { supabase } from "../../supabase/Auth";

export const getAuthSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
