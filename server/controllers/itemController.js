const Item = require("../models/ItemModel");
const axios = require("axios");

//@desc   get item data
//@route  GET /api/cart/cart
async function getItem(req, res) {
  try {
    const item = await axios.get("https://fakestoreapi.com/products");
    const items = await Item.insertMany(item.data);
    res.status(200).json(items);
  } catch (e) {
    console.error(error);
    res.status(500).json({ message: "Internal Error" });
  }
}

//@desc     add item data
//@route    POST /api/items/item/:id
async function addItem(req, res) {
  const item = axios.post("https://fakestoreapi.com/products");
  res.status(200).json(item);
}

//@desc     delete item data
//@route    DELETE /api/items/removeItem
async function deleteItem(req, res) {}

module.exports = { getItem, addItem, deleteItem };
