const Cart = require("../models/CartModel");

//@desc   get cart data
//@route  GET /api/cart
async function getCart(req, res) {}

//@desc   add to card
//@route  POST /api/cart/addToCart
async function addToCart(req, res) {
  try {
    const cart = new Cart.create({
      user: req.user._id,
      cartItems: req.body.cartItems,
    });

    const savedCart = await cart.save();
    return res.status(201).json({ cart: savedCart });
  } catch (error) {
    console.error("Error adding to cart", error);
    return res.status(500).json({ message: "Internal error" });
  }
}

//@desc   delete from cart
//@route  DELETE /api/cart/remove
async function deleteFromCart(req, res) {}

module.exports = { getCart, addToCart, deleteFromCart };
