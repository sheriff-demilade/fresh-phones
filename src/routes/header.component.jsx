import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer.component";
import { BsList, BsXLg, BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { totalQuantity } from "../store/cart/cart.selector";
import CartDropdown from "../components/cart-dropdown.component";

const Header = () => {
  const cartItemsQuantity = useSelector(totalQuantity);
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenCart(false);
  };

  const toggleCartDropdown = () => setOpenCart(!openCart);

  return (
    <div className="w-full overflow-x-hidden text-gray-600">
      <header className="relative flex justify-between items-center h-16 px-4 sm:px-8 bg-blue-50 shadow">
        <Link to="/" className="text-2xl  text-blue-300 logo">
          FreshPhones
        </Link>

        <nav
          className={`bg-blue-100 absolute top-0 right-0 pl-6 pt-4 w-3/4 h-screen font-medium duration-500 ease-in-out rounded-bl-lg ${
            openNav ? "translate-x-0" : "translate-x-full"
          } z-10`}
        >
          <ul className=" flex flex-col-reverse gap-4">
            <li>
              <Link
                onClick={toggleNav}
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNav}
                to="/shop"
                className="hover:text-blue-400 transition duration-300"
              >
                Shop
              </Link>
            </li>

            <li className="relative">
              <div
                className="hover:text-blue-400 transition duration-300 relative inline-block"
                onClick={toggleCartDropdown}
              >
                <BsCart3 size={24} />
                <div
                  className={`h-5 w-5 flex justify-center items-center rounded-full absolute -top-2 -right-[10px] bg-blue-400 text-white text-xs font-medium ${
                    !cartItemsQuantity ? "hidden" : ""
                  }`}
                >
                  {cartItemsQuantity}
                </div>
              </div>
              {openCart && <CartDropdown handleClick={toggleNav} />}
            </li>
            <li>
              <Link
                onClick={toggleNav}
                to="/login"
                className="inline-block px-4 py-1 rounded-md text-white bg-blue-400 hover:bg-white hover:text-blue-400 hover:outline outline-1 outline-blue-400 transition duration-300 shadow mb-6"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleNav} className="hover:text-blue-400 z-20">
          {!openNav ? <BsList size={24} /> : <BsXLg size={24} />}
        </button>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
