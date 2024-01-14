const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  size: Array,
  category: String,
  description: String,
  image: String,
  alt: String,
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
