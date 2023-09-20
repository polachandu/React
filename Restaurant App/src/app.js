import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import useState from "react";
import HeaderComponent from "./components/HeaderComponent"
import BodyComponent from "./components/BodyComponent";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
