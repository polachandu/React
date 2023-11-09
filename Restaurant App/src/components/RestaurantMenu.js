import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const[showIndex, setShowIndex ] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <h3>Menu</h3> */}
      {/* <ul>
        { itemCards.map( (item) => <li key = {item.card.info.id}>{item.card.info.name} - {item.card.info.price/100} rs</li>) }
      </ul> */}
      {/* catagories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory key = {category?.card?.card?.title} resCategory={category?.card?.card} showItems={index == showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        />
))}
    </div>
  );
};
export default RestaurantMenu;
