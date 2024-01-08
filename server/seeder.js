const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

const app = express();

const fakeData = require("./data/fakeStore");
const Item = require("./models/ItemModel");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

async function importData() {
  try {
    await Item.deleteMany();
    await Item.insertMany(fakeData);

    console.log("data imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

importData();

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
