import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layouts/layout";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import SpaceDetail from "./pages/SpaceDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        index: true, //base page
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: "/space/:spaceId",
        element: <SpaceDetail />,
        handle: { title: "Space" },
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};
export default Router;
