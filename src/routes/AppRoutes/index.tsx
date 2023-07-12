import { useRoutes } from "react-router-dom";
import DefaultLayout from "../../components/shared-layouts/DefaultLayout";
import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";

const AppRoutes = () => {
  let element = useRoutes([
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
