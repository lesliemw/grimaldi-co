import fakeData from "../../data/fakeStore";
import CartHeader from "./CartHeader";
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";

function CartSummary() {
  return (
    <section className="flex items-center mt-20 lg:mt-56 pb-10 lg:h-screen font-themeFont">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="p-8 bg-gray-50 ">
          <h2 className="mb-8 text-4xl font-bold ">Your Cart</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <CartHeader />
              {fakeData.map((product) => (
                <CartProducts
                  key={product.id}
                  src={product.image}
                  alt={product.alt}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700 ">Apply Coupon</span>
                <input
                  type="text"
                  className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border md:flex-none md:mr-6 rounded "
                  placeholder="x304k45"
                  required=""
                />
                <button className="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-indigo-500 hover:bg-indigo-600 rounded-md  md:flex-none">
                  Apply
                </button>
              </div>
            </div>
            <CartOrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartSummary;
