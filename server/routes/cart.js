const express = require("express");

const router = express.Router();

const {
  getCart,
  addToCart,
  deleteFromCart,
} = require("../controllers/cartController");

//get cart data
router.get("/cart", getCart);

//add to cart
router.post("/cart/:id", addToCart);

//delete from cart
router.delete("/remove", deleteFromCart);

module.exports = router;