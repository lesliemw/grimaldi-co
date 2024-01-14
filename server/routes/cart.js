const express = require("express");

const router = express.Router();

const {
  getCart,
  addToCart,
  deleteFromCart,
} = require("../controllers/cartController");

//get cart data
router.get("/", getCart);

//add to cart
router.post("/addToCart/:id", addToCart);

//delete from cart
router.delete("/remove", deleteFromCart);

module.exports = router;
