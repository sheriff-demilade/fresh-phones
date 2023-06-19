import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSelector, totalPrice } from "../store/cart/cart.selector";
import DropdownItem from "./dropdown-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(cartSelector);
  const total = useSelector(totalPrice);

  return (
    <div className=" w-80 p-4 shadow-md absolute top-14 -left-24 font-normal bg-blue-50 rounded-lg z-10">
      <div className=" h-64 overflow-y-scroll flex flex-col gap-4">
        {cartItems.length ? (
          cartItems.map((cartItem, idx) => (
            <DropdownItem key={idx} cartItem={cartItem} />
          ))
        ) : (
          <p className="text-lg text-center">Your cart is empty</p>
        )}
      </div>

      <p className="text-xl text-center p-4 text-blue-400 font-medium">
        Total: ${total}
      </p>
      <Link
        to="/checkout"
        className="w-full h-12 flex justify-center items-center rounded-md text-lg font-medium bg-blue-400 text-white hover:bg-blue-500 duration-300 shrink-0"
      >
        Goto Checkout
      </Link>
    </div>
  );
};

export default CartDropdown;
