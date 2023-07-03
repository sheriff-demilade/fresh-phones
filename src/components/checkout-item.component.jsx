import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  reduceCartItemQuantity,
} from "../store/cart/cart.slice";
import { BsPlus, BsDash, BsXLg } from "react-icons/bs";

const CheckoutItem = ({ cartItem }) => {
  const { phoneName, price, quantity, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => dispatch(addToCart(cartItem));
  const removeItemHandler = () => dispatch(removeFromCart(cartItem));
  const decreaseQuantityHandler = () =>
    dispatch(reduceCartItemQuantity(cartItem));

  return (
    <div className=" grid grid-cols-7 items-center rounded-lg md:rounded-xl overflow-hidden shadow hover:shadow-md bg-white max-w-3xl">
      <img src={imageUrl} alt={phoneName} className="h-full col-span-2" />

      <div className=" col-span-5  flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 p-2 pl-4 sm:pl-8 relative">
        <p className="text-blue-400 md:w-44">{phoneName}</p>

        <div className="flex items-center gap-5 md:gap-7 pb-1 sm:pb-0">
          <p className="font-medium mr-3 md:mr-6">${price}</p>
          <button
            onClick={decreaseQuantityHandler}
            className="h-8 md:h-9 w-8 md:w-9 flex justify-center items-center rounded-full shadow-md  text-gray-500 hover:text-blue-400 hover:shadow"
          >
            <BsDash size={18} />
          </button>
          <p>x{quantity}</p>
          <button
            onClick={increaseQuantityHandler}
            className="h-8 md:h-9 w-8 md:w-9 flex justify-center items-center rounded-full shadow-md  text-gray-500 hover:text-blue-400 hover:shadow"
          >
            <BsPlus size={18} />
          </button>

          <button
            className=" text-gray-400 hover:text-blue-400 sm:mr-3 md:mr-4 absolute top-0 sm:top-1/2 sm:-translate-y-1/2 right-0 p-2"
            onClick={removeItemHandler}
          >
            <BsXLg size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
