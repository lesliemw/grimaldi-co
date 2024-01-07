const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  product: String,
  size: String,
  quantity: Number,
  price: Number,
});

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
