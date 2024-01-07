require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const itemRoutes = require("./routes/item");

const app = express();

app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/items", itemRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

//untested code
// app.get("/account", async (req, res) => {
//   const account = await Account.find();
//   res.json(account);
// });

// //for when I create the cart pages
// app.delete("cart/delete/:id", async (req, res) => {
//   const result = await Cart.findByIdAndDelete(req.params.id);
//   res.json(result);
// });

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
