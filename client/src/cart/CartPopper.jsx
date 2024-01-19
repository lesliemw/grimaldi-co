import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { useIsOpen } from "../context/IsOpenContext";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import CartSummary from "./CartSummary";
import { useCartPrice } from "../context/CartPriceContext";

import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { removeFromCart } from "../redux/actions/cartActions";

export default function CartPopper() {
  const { isOpenCart, isOpenCartToggle, setIsOpenCart } = useIsOpen();
  const { user } = useUser();
  const { formattedSum } = useCartPrice();

  function handleCheckout() {
    setIsOpenCart(false);
    return <CartSummary />;
  }

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  function removeItemFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <Transition.Root show={isOpenCart} as={Fragment} onClose={isOpenCartToggle}>
      <Dialog as="div" className="relative z-20">
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 font-themeFont overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={isOpenCartToggle}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <HiXMark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {cartItems.length ? (
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartItems?.map((product, i) => (
                                <CartItem
                                  key={i}
                                  product={product}
                                  image={product.image}
                                  alt={product.alt}
                                  name={product.name}
                                  size={product.size}
                                  price={product.price * product.qty}
                                  qty={product.qty}
                                  removeItemFromCart={removeItemFromCart}
                                />
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <>
                            <h1 className="text-center font-semibold">
                              Nothing to see here 😢
                            </h1>
                            <p>
                              Continue shopping by clicking the button below.
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>€ {formattedSum}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <NavLink
                          to={user ? "/cart" : "/login"}
                          onClick={handleCheckout}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600"
                        >
                          Checkout
                        </NavLink>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or {""}
                          <button
                            type="button"
                            className="font-medium text-indigo-500 hover:text-indigo-600"
                            onClick={isOpenCartToggle}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
