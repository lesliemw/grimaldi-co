const Item = require("../models/ItemModel");

//@desc   get item data from all products
//@route  GET /api/items/item
async function getItems(req, res) {
  try {
    const products = await Item.find({});
    res.status(200).json(products);
  } catch (e) {
    console.error(error);
    res.status(500).json({ message: "Internal Error" });
  }
}

//@desc   get item data from one product
//@route  GET /api/items/:id
async function getItem(req, res) {
  try {
    const product = await Item.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Error" });
  }
}

module.exports = { getItems, getItem };
