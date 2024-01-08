import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(itemId) {
    setCart([...cart, itemId]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("Unable to add to cart");
  return context;
}

export { CartProvider, useCart };
