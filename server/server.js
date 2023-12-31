require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://lesliemw:${process.env.API_PASSWORD}@ecommerce.anwfs9w.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Account = require("./models/AccountModel");

app.get("/account", async (req, res) => {
  const account = await Account.find();
  res.json(account);
});
app.post("/account/new", (req, res) => {
  const newAccount = new Account({
    text: req.body.text,
  });
  newAccount.save();
  res.json(newAccount);
});

//for when I create the cart pages
app.delete("cart/delete/:id", async (req, res) => {
  const result = await Cart.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
