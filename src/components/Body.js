// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // whenever state variable updates , react triggers a reconciliation cycle (re-renders the component)
  const [searchText , setsearchText] = useState("");
  
  // using custom hook to get dynamic and static restaurant list
  const [listOfRestaurants,fullList] = useRestaurantList();

  // normal js variable 
      // let listOfRestaurants = [
      //                           {
      //                               "info": {
      //                                       "id": "655020",
      //                                       "name": "Burger King",
      //                                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6bd0c928-d526-4bae-9dd3-0c0ccd7ec4df_655020.jpg",
      //                                       "costForTwo": "₹350 for two",
      //                                       "cuisines": [
      //                                           "Burgers",
      //                                           "American"
      //                                       ],
      //                                       "avgRating": 4.3,
      //                                       "avgRatingString": "4.3",
      //                                       "sla": {
      //                                           "deliveryTime": 20,                                               
      //                                       },                                      
      //                                       },               
      //                           },
      //                           {
      //                               "info": {
      //                                       "id": "655021",
      //                                       "name": "KFC",
      //                                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6bd0c928-d526-4bae-9dd3-0c0ccd7ec4df_655020.jpg",
      //                                       "costForTwo": "₹350 for two",
      //                                       "cuisines": [
      //                                           "Burgers",
      //                                           "American"
      //                                       ],
      //                                       "avgRating": 3.8,
      //                                       "avgRatingString": "4.3",
      //                                       "sla": {
      //                                           "deliveryTime": 20,                                               
      //                                       },                                      
      //                                       },  
      //                           }] ;

    // conditional rendering- page will show fake cards when first loads
    // if(listOfRestaurants.length ===0){
    //  return <Shimmer />
    // }
      
    console.log("body rendered")

    // if offline this returns else the below body part will returns 
    const onlineStatus = useOnlineStatus() ;
    if(onlineStatus===false)
      {
        return <h1>you are offline</h1>
      } 


    // using ternary operator - when list is empty shimmer will shows 
    return fullList.length ===0 ? (<Shimmer/>) : (

    <div className="Body">
      <div className="filter">

        <div className="search">
          <input type="text" className="search-box" value={searchText} 
            onChange={(e)=>{
              setsearchText(e.target.value)

                 const update = fullList.filter((res)=>{
                return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());                
            })

            console.log(searchText);
            console.log(update);
          }}
          ></input>
          <button className="search-button"
          //  onClick={()=>{
          //   const update = fullList.filter((res)=>{
          //       return res.info.name.toLowerCase().includes(searchText.toLowerCase());                
          //   })
          //   console.log(update);
            
          //   setlistOfRestaurants(update);
          //  }} 
          >search</button>
        </div>
        <button className="filter-btn"
          onClick={()=>{
            const filteredList = fullList.filter(
              (x)=> x.info.avgRating > 4.3
            )
             
            setlistOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="outer-container">
        <div className="res-container">

        {listOfRestaurants.map((restaurant)=> (
          <Link 
          to={"/restaurant/" + restaurant.info.id}
          key={restaurant.info.id}
          ><RestaurantCard resData={restaurant} />
          </Link>
        ))}  
   
        </div>
      </div>
     
    </div>
  );
};

export default Body ;