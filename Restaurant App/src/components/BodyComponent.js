import RestaurantCard from "./RestaurantCard";
import carts from "../utils/mockData";
import { useState, useEffect } from "react";
import { async } from "rxjs";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [listOfCarts, setListOfCarts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then(res => res.json());;
    console.log(response);
    setListOfCarts(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfCarts?.length === 0){
    return <Shimmer/>
  };

  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterCarts = listOfCarts.filter(
              (cart) => cart.info.avgRating > 4.0
            );
            setListOfCarts(filterCarts);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestroContainer">
        {listOfCarts?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
