import { nanoid, buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator}
}) ;

const cartSlice = createSliceWithThunks({
  name: "cart",
  initialState,

  reducers: (create) => ({

    addToCart: create.reducer((state, action) => {
          state.cart.push(action.payload);       
      },
     
    ),

    removeFromCart: create.reducer((state, action) => {
      state.cart = state.cart.filter((query) => query.id !== action.payload);
    }),

    clearCart: create.reducer((state) => {
      state.cart = initialState;
    }),

    // eslint-disable-next-line no-unused-vars
    fetchCart: create.asyncThunk(async( _ , thunkApi ) => {
      const data = await fetch("http://localhost:3001/cart");
      return await data.json();
    }, {
      pending: state =>{
        state.loading = true;
      },
      rejected: (state, action) => {
        state.error = action.error;
        state.loading = false;
      },
      fulfilled: (state,action) =>{
          state.cart = action.payload
      }
    })
  }),

});

export const { addToCart, removeFromCart, clearCart, fetchCart } = cartSlice.actions;

export default cartSlice.reducer;
