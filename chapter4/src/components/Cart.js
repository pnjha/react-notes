import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../slice/cart";

export default () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 mx-4 bg-black text-white rounded-md" onClick={handleClearCart}>
          Clear Cart
        </button>
        <CartItemList cartItems={cartItems} />
      </div>
    </div>
  );
};
