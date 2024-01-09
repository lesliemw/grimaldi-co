const Cart = require("../models/CartModel");

//@desc   get cart data
//@route  GET /api/cart
async function getCart(req, res) {}

//@desc   add to card
//@route  POST /api/cart/addToCart
async function addToCart(req, res) {
  const cart = newCart({
    user: req.user._id,
    cartItems: req.body.cartItems,
  });

  cart.save((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      return res.status(201).json({ cart });
    }
  });
}

//@desc   delete from cart
//@route  DELETE /api/cart/remove
async function deleteFromCart(req, res) {}

module.exports = { getCart, addToCart, deleteFromCart };
