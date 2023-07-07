import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../../components/shared-layouts/DefaultLayout";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import NotFound from "../../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "home", element: <HomePage /> }],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
