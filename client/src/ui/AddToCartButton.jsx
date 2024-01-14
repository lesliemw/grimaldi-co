import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import axios from "axios";

function AddToCartButton() {
  const { addToCartContext, products } = useCart();

  async function handleAddToCart(e) {
    e.preventDefault();
    try {
      const { data: cartItem } = await axios.post(
        `/cart/addToCart/${products._id}`
      );

      addToCartContext(cartItem);
    } catch (error) {
      console.error(
        "Error adding item to cart:",
        error.message || error.response?.data?.error || "Unknown error"
      );
    }
  }

  return (
    <button
      type="button"
      className=" flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm sm:text-md font-semibold text-white  hover:bg-indigo-600 gap-2"
      onClick={(e) => handleAddToCart(e, products._id)}
    >
      <span>
        <IoBagHandleOutline />{" "}
      </span>{" "}
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
