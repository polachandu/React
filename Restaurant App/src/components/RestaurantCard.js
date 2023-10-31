import { RESTRO_LOGO_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
    return (
      <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-400 rounded-lg h-[360px]">
        <img className="w-56 h-48 p-4 rounded-3xl"
          src={ RESTRO_LOGO_URL + cloudinaryImageId }
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="Cusine">{cuisines.join(", ")}</h4>
        <h4 className="Ratings">{avgRating} ratings</h4>
        <h4 className="ETA">{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;