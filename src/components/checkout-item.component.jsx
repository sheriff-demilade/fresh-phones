import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  reduceCartItemQuantity,
} from "../store/cart/cart.slice";

const CheckoutItem = ({ cartItem }) => {
  const { phoneName, price, quantity, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => dispatch(addToCart(cartItem));
  const removeItemHandler = () => dispatch(removeFromCart(cartItem));
  const decreaseQuantityHandler = () =>
    dispatch(reduceCartItemQuantity(cartItem));

  return (
    <div className=" flex gap-10 items-center rounded-lg shadow hover:shadow-md duration-300 text-gray-600 bg-white overflow-hidden">
      <img src={imageUrl} alt={phoneName} className="h-24 w-36" />

      <p className=" text-xl w-52">{phoneName}</p>

      <p className=" text-xl mr-10">${price}</p>

      <button
        className=" w-10 h-10 rounded-full shadow-md active:shadow  hover:text-blue-400 duration-300"
        onClick={decreaseQuantityHandler}
      >
        <ion-icon name="remove-outline"></ion-icon>
      </button>

      <p className="text-lg">{quantity}</p>

      <button
        className=" w-10 h-10 rounded-full shadow-md active:shadow  hover:text-blue-400 duration-300"
        onClick={increaseQuantityHandler}
      >
        <ion-icon name="add-outline"></ion-icon>
      </button>

      <button
        className="text-lg hover:text-blue-400 duration-300 px-10"
        onClick={removeItemHandler}
      >
        remove
      </button>
    </div>
  );
};

export default CheckoutItem;
