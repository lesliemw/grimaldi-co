import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: (create) => ({

    addToCart: create.reducer((state, action) => {
        state.cart.push(action.payload);
      }
    ),

    removeFromCart: create.reducer((state, action) => {
      state.cart = state.cart.filter((query) => query.id !== action.payload);
    }),

    clearCart: create.reducer((state) => {
      state.cart = initialState;
    }),
  }),

});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
