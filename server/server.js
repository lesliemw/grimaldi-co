require("dotenv").config();
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");

const app = express();

app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//route imports
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const itemRoutes = require("./routes/item");

//routes
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/items", itemRoutes);

connectDb();

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
