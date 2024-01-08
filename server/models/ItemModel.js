const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: String,
  size: Array,
  category: String,
  description: String,
  image: String,
  alt: String,
  quantity: Number,
  price: Number,
});

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
