import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalQuantity } from "../store/cart/cart.selector";
import Footer from "../components/footer.component";
import CartDropdown from "../components/cart-dropdown.component";

const Header = () => {
  const cartItemsQuantity = useSelector(totalQuantity);
  const [toggleCartDropdown, setToggleCartDropdown] = useState(false);

  const handleClick = () => {
    setToggleCartDropdown(!toggleCartDropdown);
  };

  return (
    <Fragment>
      <header className="flex justify-between gap-20 items-center h-16 px-8 bg-blue-50 border border-blue-100">
        <Link to="/" className="text-3xl  text-blue-300 logo">
          FreshPhones
        </Link>

        <nav className="">
          <ul className="flex items-center gap-8 tracking-wider text-xs font-semibold text-gray-500 ">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-blue-400 transition duration-300"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                TESTIMONIAL
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center  gap-8 tracking-wider text-xs font-semibold text-gray-500 ">
          <li>
            <div className="relative">
              <div
                className="hover:text-blue-400 transition duration-300 block relative"
                onClick={handleClick}
              >
                <ion-icon name="cart-outline" size="large"></ion-icon>
                <div className="h-5 w-5 flex justify-center items-center rounded-full absolute -top-1 -right-2 bg-blue-400 text-white text-xs font-medium">
                  {cartItemsQuantity}
                </div>
              </div>
              {toggleCartDropdown && <CartDropdown />}
            </div>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >
              LOG IN
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="px-4 py-2 bg-blue-400 text-white rounded-md hover:text-blue-400  hover:bg-white transition duration-300 hover:outline outline-1 outline-blue-400"
            >
              SIGN UP
            </Link>
          </li>
        </ul>
      </header>

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Header;
