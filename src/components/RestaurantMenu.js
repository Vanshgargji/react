import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId} = useParams();
  const menuItems = useRestaurantMenu(resId);  // making our own hook (which have the main hooks wrapped inside)
  
  console.log("restaurant Menu rendered");

  if(menuItems === null) return <Shimmer /> ; 

  const groupedCard = menuItems.cards?.find((card) => card.groupedCard)?.groupedCard;    // ✅ Dynamically find groupedCard
  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];     // ✅ Get all regular cards under REGULAR section

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

