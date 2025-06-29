import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    // dispatch an action 
    dispatch(addItem(item));
  }

  console.log(items);
  return (
<div>
  {items.map((item) => (
    <div
      key={item.card.info.id}
      className="m-2 p-4 border-b-2 border-gray-200 flex h-40 items-start"
    >
      <div className="flex-1 pr-8">
        <div>
          <span className="font-medium">{item.card.info.name}</span>
        </div>
        <span className="text-sm">₹ {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
        <p className="text-xs mt-2 mb-3 line-clamp-2">
          {item.card.info.description}
        </p>
      </div>
      <div className="w-20 h-20 flex-shrink-0 pl-8 ">
        <img
          alt="item image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            item.card.info.imageId
          }
          className="w-full h-full object-cover rounded "
        />
        <button className="ml-4 bg-gray-100 px-4 absolute py-2 rounded-md border-1 border-gray-200 text-green-600 font-bold text-xs hover:bg-gray-300 cursor-pointer mb-[4px] shadow-md"
        onClick={()=> handleAddItem(item)}>
          ADD
        </button>
      </div>
    </div>
  ))}
</div>
  );
};

export default ItemList;
