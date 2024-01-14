import { useCart } from "../context/CartContext";

function QuantityCounter() {
  const { decreaseQuantity, increaseQuantity, quantity } = useCart();
  return (
    <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
      <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md  ">
        <button
          className="py-2 hover:text-gray-700 "
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          className="w-12 px-2 justify-center py-4 text-center border-0 rounded-md  bg-gray-50  "
          value={quantity}
          placeholder={quantity}
        />
        <button
          className="py-2 hover:text-gray-700 "
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="font-medium text-indigo-500 hover:text-indigo-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default QuantityCounter;
