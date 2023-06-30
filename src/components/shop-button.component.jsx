import { Link } from "react-router-dom";

const ShopButton = ({ handleClick }) => {
  return (
    <Link
      to="/shop"
      onClick={handleClick}
      className="inline-block px-4 py-3 w-fit rounded-lg text-white bg-blue-400 hover:bg-blue-500 duration-300 shadow"
    >
      GOTO SHOP
    </Link>
  );
};

export default ShopButton;
