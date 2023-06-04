import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [],
};

const addProduct = (cartItems, product) => {
  const { phoneName } = product;
  const itExist = cartItems.find(
    (cartItem) => cartItem.phoneName === phoneName
  );
  if (itExist) {
    return cartItems.map((cartItem) =>
      cartItem.phoneName === phoneName
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeProduct = (cartItems, product) => {
  return cartItems.filter(
    (cartItems) => cartItems.phoneName !== product.phoneName
  );
};

const reduceProductQuantity = (cartItems, product) => {
  const thatProduct = cartItems.find(
    (cartItem) => cartItem.phoneName === product.phoneName
  );
  if (thatProduct.quantity === 1) {
    return removeProduct(cartItems, product);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.phoneName === product.phoneName
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, action) {
      state.cartItems = addProduct(state.cartItems, action.payload);
      // const { phoneName } = action.payload;
      // const itExist = state.cartItems.find(
      //   (cartItem) => cartItem.phoneName === phoneName
      // );
      // if (itExist) {
      //   state.cartItems = state.cartItems.map((cartItem) =>
      //     cartItem.phoneName === phoneName
      //       ? { ...cartItem, quantity: cartItem.quantity + 1 }
      //       : cartItem
      //   );
      // } else {
      //   state.cartItems.push({ ...action.payload, quantity: 1 });
      // }
    },

    removeFromCart(state, action) {
      state.cartItems = removeProduct(state.cartItems, action.payload);
    },

    reduceCartItemQuantity(state, action) {
      state.cartItems = reduceProductQuantity(state.cartItems, action.payload);
    },
  },
});

export const { addToCart, removeFromCart, reduceCartItemQuantity } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
