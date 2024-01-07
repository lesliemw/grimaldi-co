const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  product: String,
  size: String,
  quantity: Number,
  price: Number,
});

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;
