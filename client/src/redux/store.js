import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { cartReducer } from "./reducers/cartReducer";
import { getItemDetailsReducer, getItemsReducer } from "./reducers/itemReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getItems: getItemsReducer,
  getItemDetails: getItemDetailsReducer,
});
const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = configureStore(
  { reducer },
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
