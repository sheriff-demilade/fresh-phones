import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
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
                ABOUT US
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
            <Link
              to="/checkout"
              className="hover:text-blue-400 transition duration-300 inline-block relative"
            >
              <ion-icon name="cart-outline" size="large"></ion-icon>
              <div className="w-4 h-4 rounded-full absolute top-0 right-0 translate-x-1/4 -translate-y-1/5 bg-blue-400 text-white text-xs text-center">
                3
              </div>
            </Link>
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
    </Fragment>
  );
};

export default Header;
