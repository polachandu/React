import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.284429&lng=76.640646&restaurantId=639290&catalog_qa=undefined&submitAction=ENTER"
    ).then((res) => res.json());
    console.log(response);
    setResInfo(response.data);
  };
   

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{ resInfo?.cards[0]?.card?.card?.info?.name }</h1> 
      {/* <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>  */}
      <ul>
        <li>Biriyani</li>
        <li>Chicken Curry</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
