import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducer";
import { getItemDetailsReducer, getItemsReducer } from "./reducers/itemReducer";

import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/api/apiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    getItems: getItemsReducer,
    getItemDetails: getItemDetailsReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
