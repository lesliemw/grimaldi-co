import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart").then(({ data }) => {
      setCart(data);
    });
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
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
