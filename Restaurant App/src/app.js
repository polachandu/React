import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import useState from "react";
import HeaderComponent from "./components/HeaderComponent"
import BodyComponent from "./components/BodyComponent";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <BodyComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <ErrorComponent />
  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
