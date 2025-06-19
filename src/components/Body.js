import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="Body">

      <div className="search">search</div>

      <div className="outer-container">
        <div className="res-container">

        {resList.map((restaurant)=> (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}  
   
        </div>
      </div>
     
    </div>
  );
};

export default Body ;