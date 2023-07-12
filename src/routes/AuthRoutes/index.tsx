import { useRoutes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import NotFound from "../../pages/NotFound";

const AuthRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default AuthRoutes;
