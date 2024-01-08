const express = require("express");

const router = express.Router();

const { getItems, getItem } = require("../controllers/itemController");

//get items data
router.get("/", getItems);

//get item data
router.get("/:id", getItem);

module.exports = router;
