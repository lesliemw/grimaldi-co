import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useUser } from "../context/UserContext";

function AddToCartButton() {
  const { cart } = useCart();
  const { user } = useUser();

  const [cartData, setCartData] = useState({
    product: user ? cart?.product : "",
    size: user ? cart?.size : "",
    quantity: user ? cart?.quantity : "",
    price: user ? cart?.price : "",
  });

  function handleAddToCart(e) {
    setCartData({
      ...cartData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <button
      type="button"
      className=" flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm sm:text-md font-semibold text-white  hover:bg-indigo-600 gap-2"
      onClick={handleAddToCart}
    >
      <span>
        <IoBagHandleOutline />{" "}
      </span>{" "}
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
