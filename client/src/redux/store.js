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

const store = configureStore(
  { reducer },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
