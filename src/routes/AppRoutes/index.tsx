import React from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "@shared-layouts/DefaultLayout";
import HomePage from "@pages/HomePage";
import NotFound from "@pages/NotFound";

const AppRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const element = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return element;
};

export default AppRoutes;
