import { StyledRootBox } from "./style";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@supabaseClient/Auth";
import { Typography } from "@mui/material";
import { getAuthSession } from "@src/controllers/AuthControllers";
import { useDispatch } from "react-redux";
import { saveUserToken } from "@src/reducers/UserReducer";

const LoginCard = () => {
  const dispatch = useDispatch();
  const getSession = async () => {
    const session = await getAuthSession();

    if (session?.access_token) {
      dispatch(
        saveUserToken({
          token: session?.access_token,
          email: session?.user?.email,
        })
      );
    }
  };

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      getSession();
    }
  });

  return (
    <StyledRootBox>
      <Typography variant="h5" width={"100%"} textAlign={"center"}>
        Log In
      </Typography>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </StyledRootBox>
  );
};
export default LoginCard;
