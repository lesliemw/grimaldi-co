const Cart = require("../models/CartModel");

//@desc   get cart data
//@route  GET /api/cart/cart
async function getCart(req, res) {
  const { product, size, quantity, price } = req.body;
  const cart = await Cart.find({ user: req.user.id });
  res.status(200).json(cart);
}

//@desc   add to card
//@route  POST /api/cart/:id
async function addToCart(req, res) {
  const product = await Item.find({ _id });
  const cart = await product.insertOne(product);
}

//@desc   delete from cart
//@route  DELETE /api/cart/remove
async function deleteFromCart(req, res) {}

module.exports = { getCart, addToCart, deleteFromCart };
