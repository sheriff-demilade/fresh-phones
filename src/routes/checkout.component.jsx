import { useSelector } from "react-redux";
import { cartSelector, totalPrice } from "../store/cart/cart.selector";
import CheckoutItem from "../components/checkout-item.component";
import ShopButton from "../components/shop-button.component";

const Checkout = () => {
  const cartItems = useSelector(cartSelector);
  const total = useSelector(totalPrice);

  return (
    <main className="container mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-24 lg:pb-28">
      {cartItems.length ? (
        <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-12">
          {cartItems.map((cartItem, idx) => (
            <CheckoutItem key={idx} cartItem={cartItem} />
          ))}
          <p className="text-2xl text-center mt-16 text-blue-400">
            Total: ${total}
          </p>
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-lg mb-12">Your cart is empty !</p>
          <ShopButton />
        </div>
      )}
    </main>
  );
};

export default Checkout;
