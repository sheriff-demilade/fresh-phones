import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="flex justify-between items-center h-16 px-8 shadow">
        <Link className="text-lg">LOGO</Link>

        <nav className="main-nav">
          <ul className="flex gap-8 text-lg">
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/login">LOG IN</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </Fragment>
  );
};

export default Header;
