import { useSelector } from "react-redux";
import { cartSelector } from "../store/cart/cart.selector";
import CheckoutItem from "../components/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(cartSelector);

  return (
    <div className="container px-8 mx-auto">
      <div className=" flex gap-40 items-center mt-12 mb-8">
        <h3 className="text-2xl text-gray-700">Phone Name</h3>
        <h3 className="text-2xl text-gray-700">Quantity</h3>
      </div>
      {cartItems.map((cartItem, idx) => (
        <CheckoutItem key={idx} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Checkout;
