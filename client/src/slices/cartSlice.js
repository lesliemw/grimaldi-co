import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  status: "idle", //"idle" | "loading" | "success" | "failure"
  error: null,
};

export const getCart = createAsyncThunk("getCart", async (id) => {
  const data = await axios.get(`/items/${id}`);
  return data.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (query) => query.product !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.status = "failure";
      state.error = true;
    });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
