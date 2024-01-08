const mongoose = require("mongoose");
require("dotenv").config();

function connectDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to DB"))
    .catch(console.error);
}
module.exports = connectDb;
