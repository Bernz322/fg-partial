import React from "react";

// Auth pages
import SignIn from "../views/dashboard/auth/sign-in";
// Error pages
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";
import Maintenance from "../views/dashboard/errors/maintenance";

export const SimpleRouter = [
  {
    path: "auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "errors/error404",
    element: <Error404 />,
  },
  {
    path: "errors/error500",
    element: <Error500 />,
  },
  {
    path: "errors/maintenance",
    element: <Maintenance />,
  },
];
