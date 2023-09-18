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
 *        - Img
 *        - Name of Res, Star Rating, cuisine, delivery time
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

const RestaurantCard = (props) => {
    return(
        <div className="RestaurantCard">
            <img className="res-img" src = "https://www.thedeliciouscrescent.com/wp-content/uploads/2019/04/Chicken-Biryani-Square.jpg"/>
            <p className="RestaurantName">{props.resName}</p>
            <p className="Cusine">{props.cusine}</p>
            <p className="Ratings">5.0</p>
            <p className="ETA">20 mins</p>
        </div>
    )
};

const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="RestroContainer">
            <RestaurantCard resName="Lazy Aishwarya" cusine="Biryani, North Indian, Italian, Mexican"/>
            <RestaurantCard resName= "Active Chandu" cusine = "Burger, Chicken Lollipops"/>
            </div>
        </div>
    )
};

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
