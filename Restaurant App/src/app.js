import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import useState from "react";
import HeaderComponent from "./components/HeaderComponent"
import BodyComponent from "./components/BodyComponent";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *     - RestaurantCard
 *        - Img
 *        - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - CopyRight
 *  - Links
 */




const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
  {
    path: "/",
    element: <BodyComponent />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
    ],
  errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
