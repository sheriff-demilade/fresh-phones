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
      className="max-w-sm shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={onClickHandler}
    >
      <img src={imageUrl} alt={phoneName} />
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
