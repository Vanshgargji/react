import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menuItems , setMenuItems] = useState(null);

  const {resId} = useParams();
  
  useEffect(() => {
    fetchMenuItems();
  }, []);
 

  const fetchMenuItems = async ()=> {
    const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3610131&lng=76.37323889999999&restaurantId="+resId);
    const json =  await data.json();
    console.log(json);
    setMenuItems(json.data);

  }
  
  console.log("restaurant Menu rendered");

  if(menuItems === null) return <Shimmer /> ; 

 
  // ✅ Dynamically find groupedCard
  const groupedCard = menuItems.cards?.find((card) => card.groupedCard)?.groupedCard;

  // ✅ Get all regular cards under REGULAR section
  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // ✅ Find the first card that contains itemCards
  const itemCategoryCard = regularCards.find(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const itemCards = itemCategoryCard?.card?.card?.itemCards || [];

  return (
    <div className="Menu">
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

