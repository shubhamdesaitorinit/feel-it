import { supabase } from "../../../supabase/Auth";
import { StyledRootBox } from "./style";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const LoginCardContainer = () => {
  return (
    <StyledRootBox>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "facebook", "twitter"]}
      />
    </StyledRootBox>
  );
};
export default LoginCardContainer;
