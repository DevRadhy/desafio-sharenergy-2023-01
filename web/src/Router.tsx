import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages";
import StatusCode from "./pages/StatusCode";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/status-code",
      element: <StatusCode />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default Router;