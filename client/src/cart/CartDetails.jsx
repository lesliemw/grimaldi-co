import { FaGooglePay } from "react-icons/fa";

function CartDetails() {
  return (
    <section className="flex items-center mt-10 lg:h-screen font-themeFont">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="p-8 bg-gray-50 ">
          <h2 className="mb-8 text-4xl font-bold ">Your Cart</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <h2 className="font-bold text-gray-500 ">Product name</h2>
                </div>
                <div className="hidden px-4 lg:block lg:w-2/12">
                  <h2 className="font-bold text-gray-500 ">Price</h2>
                </div>
                <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500 ">Quantity</h2>
                </div>
                <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500 "> Subtotal</h2>
                </div>
              </div>
              <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                  <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                    <div className="flex flex-wrap items-center -mx-4">
                      <div className="w-full px-4 mb-3 md:w-1/3">
                        <div className="w-full h-96 md:h-24 md:w-24">
                          <img
                            src="https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="w-2/3 px-4">
                        <h2 className="mb-2 text-xl font-bold ">DSL Camera</h2>
                        <p className="text-gray-500  ">Picture frame</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden px-4 lg:block lg:w-2/12">
                    <p className="text-lg font-bold text-indigo-500 ">$99.00</p>
                    <span className="text-xs text-gray-500 line-through dark:text-gray-400">
                      $1500
                    </span>
                  </div>
                  <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                    <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md  ">
                      <button className="py-2 hover:text-gray-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="w-12 px-2 py-4 text-center border-0 rounded-md  bg-gray-50  md:text-right"
                        placeholder="1"
                      />
                      <button className="py-2 hover:text-gray-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                    <p className="text-lg font-bold text-indigo-500 ">$99.00</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                  <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                    <div className="flex flex-wrap items-center -mx-4">
                      <div className="w-full px-4 mb-3 md:w-1/3">
                        <div className="w-full h-96 md:h-24 md:w-24">
                          <img
                            src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="w-2/3 px-4">
                        <h2 className="mb-2 text-xl font-bold ">DSL Camera</h2>
                        <p className="text-gray-500 ">Picture frame</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden px-4 lg:block lg:w-2/12">
                    <p className="text-lg font-bold text-indigo-500 ">$99.00</p>
                    <span className="text-xs text-gray-500 line-through ">
                      $1500
                    </span>
                  </div>
                  <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                    <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md ">
                      <button className="py-2 hover:text-gray-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="w-12 px-2 py-4 text-center border-0 rounded-md  bg-gray-50  md:text-right"
                        placeholder="1"
                      />
                      <button className="py-2 hover:text-gray-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                    <p className="text-lg font-bold text-indigo-500 ">$99.00</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700 ">Apply Coupon</span>
                <input
                  type="text"
                  className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border md:flex-none md:mr-6  "
                  placeholder="x304k45"
                  required=""
                />
                <button className="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-indigo-500 hover:bg-indigo-600 rounded-md  md:flex-none">
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full px-4 xl:w-4/12">
              <div className="p-6 border border-gray-100   bg-gray-100 md:p-8">
                <h2 className="mb-8 text-3xl font-bold text-gray-700 ">
                  Order Summary
                </h2>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 ">
                  <span className="text-gray-700 ">Subtotal</span>
                  <span className="text-xl font-bold text-gray-700 ">$99</span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 ">Shipping</span>
                  <span
                    className="text-xl font-bold text-gray-700 
                   "
                  >
                    Free
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 ">Order Total</span>
                  <span className="text-xl font-bold text-gray-700 ">
                    $99.00
                  </span>
                </div>
                <h2 className="text-lg text-gray-600 ">We offer:</h2>
                <div className="flex items-center mb-4 ">
                  <button className="bg-indigo-500 w-10 h-10">
                    <FaGooglePay />
                  </button>
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
                  <button className="block  py-4 font-bold text-center text-gray-100 uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetails;
