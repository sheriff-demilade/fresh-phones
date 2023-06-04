import { useSelector } from "react-redux";
import { cartSelector } from "../store/cart/cart.selector";
import CheckoutItem from "../components/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(cartSelector);

  return (
    <div>
      {cartItems.map((cartItem, idx) => (
        <CheckoutItem key={idx} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Checkout;
