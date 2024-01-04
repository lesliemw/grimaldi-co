const express = require("express");

const app = express();

const {
  createUser,
  userLogin,
  retrieveUserData,
  updateUserData,
} = require("../controllers/userController");

//create user
app.post("/register", createUser);

//user login
app.post("/login", userLogin);

//retrieve user data for context file
app.get("/profile", retrieveUserData);

//update user data
app.patch("/profile/update", updateUserData);

module.exports = app;
