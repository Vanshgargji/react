import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //  state variable - super powerful variable 
        const [listOfRestaurants , setlistOfRestaurants] =  useState(resList) ;

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

  return (

    <div className="Body">

      <div className="filter">
        <button className="filter-btn"
          onClick={()=>{
            const filteredList = listOfRestaurants.filter(
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}  
   
        </div>
      </div>
     
    </div>
  );
};

export default Body ;