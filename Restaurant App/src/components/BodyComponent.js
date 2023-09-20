import RestaurantCard from "./RestaurantCard";
import carts from "../utils/mockData";

const BodyComponent = () => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{cart = carts.filter(restaurant => restaurant.card.card.info.avgRating >= 4.0 ); <RestaurantCard resData={cart}/>}}>Top Rated Restaurants</button>
        </div>
        <div className="RestroContainer">
          {carts.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default BodyComponent;