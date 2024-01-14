import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await axios.get("/items");
        setProducts(productData.data);
        console.log(productData.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [cart, products._id]);

  function addToCartContext() {
    setCart([...cart, products._id]);
    console.log(products._id + " added to cart");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        products,
        addToCartContext,
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
