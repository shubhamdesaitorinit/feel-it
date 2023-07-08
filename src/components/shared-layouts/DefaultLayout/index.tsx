import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../../shared-containers/Navigation";

const DefaultLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: UserStateType) => state);
  console.log(user);
  const token = user;
  console.log({ token: user?.userData?.token }, token);
  useEffect(() => {
    if (!user?.userData?.token) {
      navigate("/login");
    }
  }, [user?.userData?.token]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
