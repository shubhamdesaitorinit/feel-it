import { createBrowserRouter } from "react-router-dom";
import DefaultRouteMiddleware from "./MiddlewareRoutes/DefaultRoutes";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DefaultRouteMiddleware />,
  },
]);

export default router;
