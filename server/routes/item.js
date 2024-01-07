const express = require("express");

const router = express.Router();

const {
  getItem,
  addItem,
  deleteItem,
} = require("../controllers/itemController");

//get item data
router.get("/item", getItem);

//add to db
router.post("/item/:id", addItem);

//delete from db
router.delete("/removeItem", deleteItem);

module.exports = router;
