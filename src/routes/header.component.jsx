import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer.component";
import { BsList, BsXLg } from "react-icons/bs";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav(!openNav);

  return (
    <div className="w-full overflow-x-hidden text-gray-600 ">
      <header className="relative flex justify-between items-center h-16 px-4 bg-blue-50 shadow">
        <Link to="/" className="text-3xl  text-blue-300 logo">
          FreshPhones
        </Link>

        <nav
          className={`bg-blue-200 absolute top-0 right-0 pl-6 pt-12 w-3/4 h-screen text-lg duration-500 ${
            openNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className=" flex flex-col gap-4">
            <li>
              <Link
                onClick={toggleNav}
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNav}
                to="/shop"
                className="hover:text-blue-400 transition duration-300"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNav}
                className="hover:text-blue-400 transition duration-300"
              >
                CART
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNav}
                to="/login"
                className="hover:text-blue-400 transition duration-300"
              >
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleNav}
                to="/shop"
                className="hover:text-blue-400 transition duration-300"
              >
                SIGN UP
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleNav}
          className="md:hidden hover:text-blue-400 z-20"
        >
          {!openNav ? <BsList size={24} /> : <BsXLg size={24} />}
        </button>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
