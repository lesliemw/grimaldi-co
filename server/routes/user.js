const express = require("express");

const router = express.Router();

const {
  createUser,
  userLogin,
  retrieveUserData,
  updateUserData,
} = require("../controllers/userController");

//create user
router.post("/register", createUser);

//user login
router.post("/login", userLogin);

//retrieve user data for context file
router.get("/profile", retrieveUserData);

//update user data
router.patch("/profile/update", updateUserData);

module.exports = router;
