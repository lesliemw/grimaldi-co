const Cart = require("../models/CartModel");

//@desc   get cart data
//@route  GET /api/cart
async function getCart(req, res) {}

//@desc   add to card
//@route  POST /api/cart/:id
async function addToCart(req, res) {}

//@desc   delete from cart
//@route  DELETE /api/cart/remove
async function deleteFromCart(req, res) {}

module.exports = { getCart, addToCart, deleteFromCart };
