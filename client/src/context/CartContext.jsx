import { createContext, useContext, useState } from "react";
import { useItems } from "./ItemContext";
import { useCartPrice } from "./CartPriceContext";
import { toast } from "react-hot-toast";
const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [qty, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const { formattedSum } = useCartPrice();
  const { items } = useItems();

  function addToCartContext(product, quantity) {
    const checkProductInCart = items.find((item) => item._id === product._id);
    setTotalPrice(formattedSum + product.price * quantity);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cart.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
      });
      setCart(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCart([...cart, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
    console.log(cart);
    console.log(product._id + " added to cart");
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    if (qty - 1 < 1) return 1;
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        items,
        addToCartContext,
        decreaseQuantity,
        increaseQuantity,
        totalPrice,
        totalQuantity,
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
