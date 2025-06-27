import { useState, useEffect } from "react";

const useRestaurantList = ()=>{

  //  state variable - super powerful variable 
  const [listOfRestaurants , setlistOfRestaurants] =  useState([]) ;//dynamic
  const [fullList , setfullList] = useState([]); //static
  

        useEffect(()=>{
          fetchData(); 
        },[]);    
        
        const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3610131&lng=76.37323889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");

          const json = await data.json();
          console.log(json);
          setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setfullList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
        }

  return [listOfRestaurants,fullList];

}

export default useRestaurantList ; 