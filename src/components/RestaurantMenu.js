import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex,setShowIndex] = useState(null) ;

  const {resId} = useParams();
  const menuItems = useRestaurantMenu(resId);  // making our own hook (which have the main hooks wrapped inside)
  
  console.log("restaurant Menu rendered");

  if(menuItems === null) return <Shimmer /> ; 

  const groupedCard = menuItems.cards?.find((card) => card.groupedCard)?.groupedCard;    // ✅ Dynamically find groupedCard
  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];     // ✅ Get all regular cards under REGULAR section

  // ✅ Find the first card that contains itemCards
  const itemCategoryCard = regularCards.filter(
  (c) => {
    const type = c.card?.card?.["@type"] 
    return(
    type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
    type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    )
  }
);

  console.log("item category card",itemCategoryCard);

  return (
    <div className="Menu mt-20 ">
      {itemCategoryCard.map((category,index)=>{
      return <RestaurantCategory key = {category?.card?.card?.categoryId} data = {category?.card?.card}
        showItems={index===showIndex ? true:false}
        setShowIndex={()=>setShowIndex(index)} />
      })}
    </div>
  );
};

export default RestaurantMenu;

