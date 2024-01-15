import * as actionTypes from "../constants/cartConstants";

export function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (query) => query.product === item.product
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((query) =>
            query.product === existingItem.product ? item : query
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (query) => query.product !== action.payload
        ),
      };

    default:
      return state;
  }
}
