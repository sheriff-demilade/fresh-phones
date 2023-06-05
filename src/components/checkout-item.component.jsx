import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  reduceCartItemQuantity,
} from "../store/cart/cart.slice";

const CheckoutItem = ({ cartItem }) => {
  const { phoneName, quantity, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => dispatch(addToCart(cartItem));
  const removeItemHandler = () => dispatch(removeFromCart(cartItem));
  const decreaseQuantityHandler = () =>
    dispatch(reduceCartItemQuantity(cartItem));

  return (
    <div className="bord border-b-2 mb-6 flex gap-8 items-center">
      <img src={imageUrl} alt={phoneName} className="h-24" />
      <h3>{phoneName}</h3>
      <span className="text-lg font-bold" onClick={decreaseQuantityHandler}>
        -
      </span>
      <h3>{quantity}</h3>
      <span className="text-lg font-bold" onClick={increaseQuantityHandler}>
        +
      </span>
      <span className="text-lg font-bold" onClick={removeItemHandler}>
        x
      </span>
    </div>
  );
};

export default CheckoutItem;