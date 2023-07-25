import React from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import NotFound from "@pages/NotFound";

const AuthRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const element = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default AuthRoutes;
