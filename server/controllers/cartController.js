const Cart = require("../models/CartModel");

//@desc   add to cart
//@route  POST
async function addToCart(req, res) {
  const { product, size, quantity, price } = req.body;
  owner: req.user._id;
}

module.exports = { addToCart };
