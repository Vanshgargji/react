// import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // whenever state variable updates , react triggers a reconciliation cycle (re-renders the component)
  const [searchText, setsearchText] = useState("");

  //  state variable - super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); //dynamic
  const [fullList, setfullList] = useState([]); //static

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3610131&lng=76.37323889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
  //   );

  //   const json = await data.json();
  //   console.log(json);
  //   setlistOfRestaurants(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setfullList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

useEffect(() => {
  console.log("here is the data",resList);
  setlistOfRestaurants(resList);
  setfullList(resList);
}, []);


  console.log("body rendered");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // if offline this returns else the below body part will returns
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>you are offline</h1>;
  }
  


  // using ternary operator - when list is empty shimmer will shows
  return fullList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body ">
      <div className="filter flex">
        <div className="search p-4">
          <input
            type="text"
            className="search-box w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-100 text-gray-800 placeholder-gray-500"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);

              const update = fullList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });

              console.log(searchText);
              console.log(update);

              setlistOfRestaurants(update)
            }}
          />
          {/* <button className="search-button"
          //  onClick={()=>{
          //   const update = fullList.filter((res)=>{
          //       return res.info.name.toLowerCase().includes(searchText.toLowerCase());                
          //   })
          //   console.log(update);
            
          //   setlistOfRestaurants(update);
          //  }} 
          >search</button> */}
        </div>
        <button
          className="filter-btn bg-gray-100 text-gray-800 px-4 h-11 mt-4 py-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => {
            const filteredList = fullList.filter((x) => x.info.avgRating > 4.3);
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="outer-container px-8 sm:px-16 md:px-20 lg:px-24 py-8 ">
        <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center ">
          {listOfRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="transform transition duration-300 hover:scale-95 hover:shadow-lg"
            >
            {/* if a restaurant is promoted add a promoted label to it */}
            {restaurant.info.avgRating<4.4? <RestaurantCardPromoted resData={restaurant}/> :<RestaurantCard resData={restaurant} /> }
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

