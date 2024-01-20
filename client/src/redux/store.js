import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducer";
import { getItemDetailsReducer, getItemsReducer } from "./reducers/itemReducer";
import { apiSlice } from "../slices/apiSlice";

const store = configureStore({
  reducers: {
    cart: cartReducer,
    getItems: getItemsReducer,
    getItemDetails: getItemDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
