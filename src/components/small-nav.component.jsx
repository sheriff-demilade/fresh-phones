import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalQuantity } from "../store/cart/cart.selector";
import CartDropdown from "../components/cart-dropdown.component";
import { BsCart3 } from "react-icons/bs";

const SmallNav = () => {
  const cartItemsQuantity = useSelector(totalQuantity);
  const [toggleCartDropdown, setToggleCartDropdown] = useState(false);

  const handleClick = () => setToggleCartDropdown(!toggleCartDropdown);

  return (
    <ul className="flex flex-col md:flex-row  md:items-center  gap-8 tracking-wider text-xs font-semibold text-gray-500 mb-8 md:mb-auto">
      <li>
        <div className="relative">
          <div
            className="hover:text-blue-400 transition duration-300 relative inline-block"
            onClick={handleClick}
          >
            <BsCart3 size={24} />
            <div
              className={`h-5 w-5 flex justify-center items-center rounded-full absolute -top-2 -right-[10px] bg-blue-400 text-white text-xs font-medium ${
                !cartItemsQuantity && "hidden"
              }`}
            >
              {cartItemsQuantity}
            </div>
          </div>
          {toggleCartDropdown && <CartDropdown />}
        </div>
      </li>
      <li>
        <Link to="/" className="hover:text-blue-400 transition duration-300">
          LOG IN
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="px-4 py-2 border-2 border-blue-400 rounded-lg text-white bg-blue-400 hover:bg-white hover:text-blue-400 duration-300"
        >
          SIGN UP
        </Link>
      </li>
    </ul>
  );
};

export default SmallNav;
