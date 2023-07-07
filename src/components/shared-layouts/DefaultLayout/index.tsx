import { Outlet } from "react-router-dom";
import Navigation from "../../shared-containers/Navigation";

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
