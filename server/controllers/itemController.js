const Item = require("../models/ItemModel");

//@desc   get item data
//@route  GET /api/cart/cart
async function getItem(req, res) {
  const { product, size, quantity, price } = req.body;
  const item = await Item.find({ user: req.user.id });
  res.status(200).json(item);
}

//@desc     add item data
//@route    POST /api/items/item/:id
async function addItem(req, res) {}

//@desc     delete item data
//@route    DELETE /api/items/removeItem
async function deleteItem(req, res) {}

module.exports = { getItem, addItem, deleteItem };
