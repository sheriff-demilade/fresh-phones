import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer.component";
import { BsList, BsXLg } from "react-icons/bs";
import SmallNav from "../components/small-nav.component";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav(!openNav);

  return (
    <Fragment>
      <header className="relative flex justify-between gap-20 items-center h-16 px-8 bg-blue-50 border border-blue-100 ">
        <Link to="/" className="text-3xl  text-blue-300 logo">
          FreshPhones
        </Link>

        <nav
          className={`absolute bg-blue-100 top-0  right-0 w-3/4 h-screen pt-20 pl-8 translate-x-full duration-500 ease-out ${
            openNav && " translate-x-0"
          } md:relative md:translate-x-0 md:top-auto md:right-auto md:w-auto md:h-auto md:p-0 md:bg-transparent `}
        >
          {openNav && <SmallNav />}

          <ul className="flex md:items-center gap-8  tracking-wider text-xs font-semibold text-gray-500 flex-col md:flex-row ">
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
              <a
                onClick={toggleNav}
                href="#features"
                className="hover:text-blue-400 transition duration-300"
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                onClick={toggleNav}
                href="#testimonial"
                className="hover:text-blue-400 transition duration-300"
              >
                TESTIMONIAL
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <SmallNav />
        </div>

        <button
          onClick={toggleNav}
          className="text-gray-500 md:hidden hover:text-blue-400 z-20"
        >
          {!openNav ? <BsList size={24} /> : <BsXLg size={24} />}
        </button>
      </header>

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Header;
