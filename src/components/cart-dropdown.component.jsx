import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSelector, totalPrice } from "../store/cart/cart.selector";
import DropdownItem from "./dropdown-item.component";
import ShopButton from "./shop-button.component";

const CartDropdown = ({ handleClick }) => {
  const cartItems = useSelector(cartSelector);
  const total = useSelector(totalPrice);

  return (
    <div className=" w-72 p-4 shadow-md absolute top-9 sm:top-0 md:top-16 md:-left-4 left-1/4 sm:left-1/2 -translate-x-1/2 font-normal bg-blue-50 rounded-lg z-20">
      {cartItems.length ? (
        <div>
          <div className="min-h-fit max-h-64 overflow-y-scroll flex flex-col gap-4">
            {cartItems.map((cartItem, idx) => (
              <DropdownItem key={idx} cartItem={cartItem} />
            ))}
          </div>
          <p className="text-xl text-center p-4 text-blue-400 font-medium">
            Total: ${total}
          </p>
          <Link
            to="/checkout"
            onClick={handleClick}
            className="w-full h-12 flex justify-center items-center rounded-md text-lg font-medium bg-blue-400 text-white hover:bg-blue-500 duration-300 shrink-0"
          >
            Goto Checkout
          </Link>
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-lg mb-12">Your cart is empty !</p>
          <ShopButton handleClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
