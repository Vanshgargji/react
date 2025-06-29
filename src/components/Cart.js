import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {
  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    // dispatch the clearitem action from the slice 
    dispatch(clearCart());
  }

  const cartItems = useSelector((store)=> store.cart.items)

  return (
    <div className="text-center m-4 p-4 text-2xl align-bottom justify-center">

      <div className="cart&clear flex ">
      <h1 className="m-auto mb-10 font-bold">Cart</h1>
      <button className="bg-amber-300 px-4 rounded-[6px] text-[20px] font-medium hover:bg-amber-400 " 
      onClick={handleClearCart}>Clear</button>
      </div>
      {cartItems.length === 0 && (<h1>Cart is empty. Add items in cart!</h1>)}

      <div className="text-left w-[70%] m-auto ">
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}

export default Cart ; 