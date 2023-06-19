/**
 * This is the entry point of the application.
 */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// store
import { Provider } from "react-redux";
// reducer
import { store } from "./store";

import Index from "./views/index";
import { SimpleRouter } from "./router/simple-router";
import { DefaultRouter } from "./router/default-router";
import ThemeProvider from "./theme/ThemeProvider";

/**
 * Create entire app router.
 * Other routers are destructured.
 */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    ...DefaultRouter,
    ...SimpleRouter,
  ],
  { basename: process.env.PUBLIC_URL }
);

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <Provider store={store}>
    <ThemeProvider>
      <Suspense
        fallback={<div>Loading.........</div>}
      >
        <App>
          <RouterProvider
            router={router}
          ></RouterProvider>
        </App>
      </Suspense>
    </ThemeProvider>
  </Provider>
);
