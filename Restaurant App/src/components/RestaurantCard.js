import { RESTRO_LOGO_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
    return (
      <div className="RestaurantCard">
        <img
          className="res-img"
          src={ RESTRO_LOGO_URL + cloudinaryImageId }
        />
        <h3 className="RestaurantName">{name}</h3>
        <h4 className="Cusine">{cuisines.join(", ")}</h4>
        <h4 className="Ratings">{avgRating} ratings</h4>
        <h4 className="ETA">{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;