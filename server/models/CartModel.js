const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  //associate a user with the cart
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  cartItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Item",
      },
      size: String,
      quantity: Number,
      price: Number,
    },
  ],
});

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;
