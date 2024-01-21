import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import { toast } from "react-hot-toast";

export const addToCart = (id, qty, size) => async (dispatch, getState) => {
  const { data } = await axios.get(`/items/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      category: data.category,
      description: data.description,
      image: data.image,
      alt: data.alt,
      price: data.price,
      qty,
      size,
    },
  });
  toast.success("Added to cart");
  // toast.error("Unable to add item to cart, please try again");
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  toast.success("Removed from cart");
  // toast.error("Unable to from item from cart, please try again");
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
