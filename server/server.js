require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

//for encrypting the password before it hits the database
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

const jwtSecret = "sdfjasfsdfaf";

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

mongoose
  .connect(
    `mongodb+srv://lesliemw:${process.env.API_PASSWORD}@ecommerce.anwfs9w.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const User = require("./models/UserModel");
const Account = require("./models/AccountModel");
const Login = require("./models/LoginModel");

app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
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
});

app.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  console.log("is this working??");
  res.redirect("/");
});

app.get("/profile", (req, res) => {
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
});

app.patch("/profile/update", async (req, res) => {
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
});

//untested code
// app.get("/account", async (req, res) => {
//   const account = await Account.find();
//   res.json(account);
// });
// app.post("/account/new", (req, res) => {
//   const newAccount = new Account({
//     text: req.body.text,
//   });
//   newAccount.save();
//   res.json(newAccount);
// });

// //for when I create the cart pages
// app.delete("cart/delete/:id", async (req, res) => {
//   const result = await Cart.findByIdAndDelete(req.params.id);
//   res.json(result);
// });

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
