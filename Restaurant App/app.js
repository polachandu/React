import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *     - RestaurantCard
 * Footer
 *  - CopyRight
 *  - Links
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="RestroContainer"></div>

        </div>
    )
}

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
