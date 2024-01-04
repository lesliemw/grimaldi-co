const jwt = require("jsonwebtoken");
//for encrypting the password before it hits the database
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "sdfjasfsdfaf";

const User = require("../models/UserModel");

//create a user
async function createUser(req, res) {
  const { fname, lname, email, password } = req.body;

  try {
    const createdUser = await User.create({
      fname,
      lname,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(createdUser);
  } catch (e) {
    res.status(422).json(e);
  }
}

//user login function
async function userLogin(req, res) {
  const { email, password } = req.body;
  const createdUser = await User.findOne({ email });
  if (createdUser) {
    const passOk = bcrypt.compareSync(password, createdUser.password);
    if (passOk) {
      jwt.sign(
        {
          email: createdUser.email,
          id: createdUser._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(createdUser);
        }
      );
    }
  }
}

//retrieve user data for context provider
async function retrieveUserData(req, res) {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, tokenData) => {
      if (err) throw err;
      const {
        fname,
        lname,
        email,
        id,
        streetAddress,
        city,
        county,
        country,
        postalCode,
      } = await User.findById(tokenData.id);
      res.json({
        fname,
        lname,
        email,
        id,
        streetAddress,
        city,
        county,
        country,
        postalCode,
      });
    });
  } else {
    res.json(null);
  }
}

//update user data
async function updateUserData(req, res) {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found dummy" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: req.body },
      { new: true }
    );
    res.json(updatedUser);
    return;
  } catch (e) {
    console.error(e);
  }

  res.status(500).json({ error: "Internal Server Error" });
}

module.exports = { createUser, userLogin, retrieveUserData, updateUserData };
