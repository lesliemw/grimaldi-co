const express = require("express");

const router = express.Router();

const { getItems, getItemById } = require("../controllers/itemController");

//get all items from db
router.get("/", getItems);

//get item data
router.get("/:id", getItemById);

module.exports = router;
