import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveUserToken } from "../../../reducers/UserReducer";
import Cookies from "js-cookie";
import { supabase } from "../../../supabase/Auth";
import AppRoutes from "../../AppRoutes";
import AuthRoutes from "../../AuthRoutes";

const DefaultRouteMiddleware = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.access_token) {
        setIsSignedIn(true);
        Cookies.set("userData", session?.access_token);
        dispatch(
          saveUserToken({
            token: session?.access_token,
            email: session?.user?.email,
          })
        );
      }
    })();
    // eslint-disable-next-line
  }, []);

  if (isSignedIn) {
    return <AppRoutes />;
  } else if (!isSignedIn) {
    return <AuthRoutes />;
  } else {
    return <></>;
  }
};

export default DefaultRouteMiddleware;
