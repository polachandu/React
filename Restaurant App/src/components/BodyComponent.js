import RestaurantCard from "./RestaurantCard";
import carts from "../utils/mockData";
import { useState } from "react";
const BodyComponent = () => {
    const [listOfCarts, setCarts]= useState(carts);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filterCarts = listOfCarts.filter((cart) => cart.card.card.info.avgRating>4.0)
                setCarts(filterCarts);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="RestroContainer">
          {listOfCarts.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
);
};
  

  export default BodyComponent;