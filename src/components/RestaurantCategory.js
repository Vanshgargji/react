import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data ,showItems, setShowIndex}) => {
  const allItemCards = [
    ...(data.itemCards || []),
    ...(data.categories?.flatMap((category) => category.itemCards || []) || []),
  ];

  const handleClick = () => {
    setShowIndex();
    
  };

  return (
    <div className="flex justify-center">
      {/* header */}
      <div className="category bg-gray-50 p-4 w-6/12 shadow-lg m-2">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold  text-lg">
            {data.title} (
            {data?.itemCards?.length ??
              data?.categories?.reduce(
                (total, category) => total + (category.itemCards?.length || 0),
                0
              )}
            )
          </span>
          {showItems? <span> ▲ </span>:<span> ▼ </span>}
        </div>
        {/* accordion body */}

        {showItems && <ItemList items={allItemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
