import { createContext, useContext } from "react";
import { useCart } from "./CartContext";

const CartPriceContext = createContext({});

function CartPriceProvider({ children }) {
  const { cart } = useCart();
  const totalSum = cart.reduce((accumulator, product) => {
    return accumulator + parseFloat(product.price) || 0;
  }, 0);
  const discountTotal = (totalSum * 10) / 100;
  const shipping = 8;

  const formattedSum = totalSum.toFixed(2);
  const formattedDiscount = discountTotal.toFixed(2);
  const formattedShipping = shipping.toFixed(2);

  const values = {
    formattedSum,
    formattedDiscount,
    formattedShipping,
    shipping,
  };

  return (
    <CartPriceContext.Provider value={values}>
      {children}
    </CartPriceContext.Provider>
  );
}

function useCartPrice() {
  const context = useContext(CartPriceContext);
  if (context === undefined) throw new Error("Unable to add to cart");
  return context;
}

export { CartPriceProvider, useCartPrice };
