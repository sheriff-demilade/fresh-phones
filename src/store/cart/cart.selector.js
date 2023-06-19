export const cartSelector = (state) => state.cart.cartItems;

export const totalQuantity = (state) =>
  state.cart.cartItems.reduce((total, { quantity }) => quantity + total, 0);
