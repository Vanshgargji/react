// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
        //  state variable - super powerful variable 
        const [listOfRestaurants , setlistOfRestaurants] =  useState([]) ;//dynamic
        const [fullList , setfullList] = useState([]); //static

        // whenever state variable updates , react triggers a reconciliation cycle (re-renders the component)
        const [searchText , setsearchText] = useState("");

        useEffect(()=>{
          fetchData(); 
        },[]);    
        
        const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.35449958678775&lng=76.36606219821117&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          console.log(json);
          setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setfullList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
        }

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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}  
   
        </div>
      </div>
     
    </div>
  );
};

export default Body ;