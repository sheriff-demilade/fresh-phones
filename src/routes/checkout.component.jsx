import { useSelector } from "react-redux";
import { cartSelector, totalPrice } from "../store/cart/cart.selector";
import CheckoutItem from "../components/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(cartSelector);
  const total = useSelector(totalPrice);

  return (
    <main className="py-20 text-gray-600">
      <div className="flex gap-28 justify-center text-2xl mb-12">
        <p className="">Phone</p>
        <p className="">Price</p>
        <p className="">Quantity</p>
      </div>
      {cartItems.length ? (
        <div className=" container px-8 mx-auto flex items-center flex-col gap-8">
          {cartItems.map((cartItem, idx) => (
            <CheckoutItem key={idx} cartItem={cartItem} />
          ))}
          <p className="text-2xl text-center mt-16">Total: ${total}</p>
        </div>
      ) : (
        <div className="text-2xl text-center mt-16">
          <p className="mb-16">Your cart is empty!</p>
          <p className="">Add item to your cart from the shop page!</p>
        </div>
      )}
    </main>
  );
};

export default Checkout;
