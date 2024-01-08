import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

function AddToCartButton() {
  const { cart, setCart } = useCart();

  function addToCart(items) {
    setCart([...cart, items]);
  }

  return (
    <button
      type="button"
      className=" flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm sm:text-md font-semibold text-white  hover:bg-indigo-600 gap-2"
      onClick={addToCart}
    >
      <span>
        <IoBagHandleOutline />{" "}
      </span>{" "}
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
