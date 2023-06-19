export const cartSelector = (state) => state.cart.cartItems;

export const totalQuantity = (state) =>
  state.cart.cartItems.reduce((total, { quantity }) => quantity + total, 0);

export const totalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, { quantity, price }) => quantity * price + total,
    0
  );
