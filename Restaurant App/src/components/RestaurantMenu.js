import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.284429&lng=76.640646&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER"
    ).then((res) => (res.json()))
    console.log(response);
    setResInfo(response.data);
  };
   

  if (resInfo === null) {
    return <Shimmer />
  };

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{ name }</h1> 
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h3>Menu</h3>
      <ul>
        { itemCards.map( (item) => <li key = {item.card.info.id}>{item.card.info.name} - {item.card.info.price/100} rs</li>) }
      </ul>
    </div>
  );
};
export default RestaurantMenu;
