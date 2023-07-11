import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../../shared-containers/Navigation";
import { saveUserToken } from "../../../reducers/UserReducer";
import Cookies from "js-cookie";
import { supabase } from "../../../supabase/Auth";
import { Container } from "@mui/material";
import SongPlayerContainer from "../../shared-containers/SongPlayerContainer";

const DefaultLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        navigate("/login");
        return;
      }

      if (session?.access_token) {
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

  return (
    <>
      <Navigation />
      <Container maxWidth={false} disableGutters>
        <Outlet />
      </Container>
      <SongPlayerContainer />
    </>
  );
};

export default DefaultLayout;
