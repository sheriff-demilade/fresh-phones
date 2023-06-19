import { useSelector } from "react-redux";
import { cartSelector } from "../store/cart/cart.selector";
import CheckoutItem from "../components/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(cartSelector);

  return (
    <main className="py-20">
      <div className=" container px-8 mx-auto flex items-center flex-col gap-8">
        {cartItems.map((cartItem, idx) => (
          <CheckoutItem key={idx} cartItem={cartItem} />
        ))}
      </div>
    </main>
  );
};

export default Checkout;
