import { StyledRootBox } from "./style";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../supabase/Auth";

const LoginCard = () => {
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
export default LoginCard;
