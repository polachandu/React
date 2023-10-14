import RestaurantCard from "./RestaurantCard";
import carts from "../utils/mockData";
import { useState, useEffect } from "react";
import { async } from "rxjs";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [listOfCarts, setListOfCarts] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).then((res) => res.json());
    console.log(response);
    setListOfCarts(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfCarts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {console.log(searchText);
            const filteredRestaurants = listOfCarts.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurants(filteredRestaurants)
          }
          }>Search</button>
        </div>
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
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
