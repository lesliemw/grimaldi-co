import { NavLink } from "react-router-dom";
import { useCartPrice } from "../context/CartPriceContext";

function CartOrderSummary() {
  const { formattedSum, formattedDiscount, shipping } = useCartPrice();
  return (
    <div className="w-full h-fit sticky top-[82px] px-4 xl:w-4/12">
      <div className="p-6 border border-gray-100   bg-gray-100 md:p-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-700 ">
          Order Summary
        </h2>
        <div className="flex items-center justify-between pb-4 mb-4  ">
          <span className="text-gray-700 ">Subtotal</span>
          <span className="text-xl font-bold text-gray-700 ">
            € {formattedSum}
          </span>
        </div>
        <div className="flex items-center justify-between pb-4 mb-4  ">
          <span className="text-gray-700 ">Discount</span>
          <span className="text-xl font-bold text-gray-700 ">
            - € {formattedDiscount}
          </span>
        </div>
        <div className="flex items-center border-b border-gray-300 justify-between pb-4 mb-4 ">
          <span className="text-gray-700 ">Shipping</span>
          <span
            className="text-xl font-bold text-gray-700 
                   "
          >
            € {shipping}
          </span>
        </div>
        <div className="flex items-center justify-between pb-4 mb-4 ">
          <span className="text-gray-700 ">Order Total</span>
          <span className="text-xl font-bold text-gray-700 ">
            € {(formattedSum - formattedDiscount + shipping).toFixed(2)}
          </span>
        </div>
        <h2 className="text-lg text-gray-600 ">We offer:</h2>
        <div className="flex items-center mb-4 ">
          <a href="#">
            <img
              src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
              alt=""
              className="object-cover h-16 mr-2 w-26"
            />
          </a>
          <a href="#">
            <img
              src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
              alt=""
              className="object-cover h-16 mr-2 w-26"
            />
          </a>
          <a href="#">
            <img
              src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
              alt=""
              className="object-cover h-16 mr-2 w-26"
            />
          </a>
        </div>
        <div className="flex items-center justify-between ">
          <NavLink
            to="/orderPlaced"
            className="block  py-4 font-bold text-center text-gray-100 uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 w-full"
          >
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartOrderSummary;
