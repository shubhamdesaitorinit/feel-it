import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserToken } from "../../../reducers/UserReducer";
import Cookies from "js-cookie";
import AppRoutes from "../../AppRoutes";
import AuthRoutes from "../../AuthRoutes";
import { getAuthSession } from "../../../controllers/AuthControllers";

const DefaultRouteMiddleware = () => {
  const dispatch = useDispatch();
  const {
    userData: { token },
  } = useSelector((state: UserStateType) => state.user);
  const getSession = async () => {
    const session = await getAuthSession();

    if (session?.access_token) {
      Cookies.set("userData", session?.access_token);
      dispatch(
        saveUserToken({
          token: session?.access_token,
          email: session?.user?.email,
        })
      );
    }
  };

  useEffect(() => {
    getSession();
    // eslint-disable-next-line
  }, []);

  if (token) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default DefaultRouteMiddleware;
