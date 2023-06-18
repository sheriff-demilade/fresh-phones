import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cart.slice";

const CategoryItem = ({ phoneDetail }) => {
  const { imageUrl, phoneName, price } = phoneDetail;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addToCart(phoneDetail));
  };

  return (
    <div
      className=" group max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg active:bg-blue-50  duration-300 cursor-pointer"
      onClick={onClickHandler}
    >
      <div className=" overflow-hidden">
        <img
          src={imageUrl}
          alt={phoneName}
          className="group-hover:scale-105 group-active:scale-100 duration-500"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-purple-400 mb-2">
          {phoneName}
        </h2>
        <p className="text-xl font-semibold text-blue-400 mb-2">${price}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
