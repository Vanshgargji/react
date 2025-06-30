import { useDispatch } from "react-redux";
import { CDN_URL } from "./../utils/constants";
import { addItem } from "../utils/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className=" m-2 p-4 border-b-2 border-gray-200 flex h-40 items-start">
      {/* Left Section: Item Details */}
      <div className="flex-1 pr-8">
        <div className="font-medium">
          <span>{item.card.info.name}</span>
          <span>
            - ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
        </div>

        <p className="text-xs mt-2 mb-3 line-clamp-2">{item.card.info.description}</p>
      </div>

      {/* Right Section: Image and Add Button */}

      <div className="w-20 h-20 flex-shrink-0 pl-8 ">
        <img
          src={CDN_URL + item.card.info.imageId}
          alt={item.card.info.name}
          className="w-full h-full object-cover rounded  "
        />

        <button
          className="ml-4 bg-gray-100 px-4 absolute py-2 rounded-md border-1 border-gray-200 text-green-600 font-bold text-xs hover:bg-gray-300 cursor-pointer mb-[4px] shadow-md"
          onClick={() => {
            handleAddItem(item);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Item;
