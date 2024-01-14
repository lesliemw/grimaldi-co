const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

function generateToken(user) {
  return jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
}

//@desc   create a user
//@route  POST /api/user/register
async function createUser(req, res) {
  const { fname, lname, email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const createdUser = await User.create({
      fname,
      lname,
      email,
      password: hashedPassword,
    });
    const token = generateToken(createdUser._id);
    createdUser.token = token;

    res.json(createdUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(422).json({ error: "Error creating user" });
  }
}

//@desc   user login function
//@route  POST /api/user/login
async function userLogin(req, res) {
  const { email, password } = req.body;

  try {
    const createdUser = await User.findOne({ email });

    if (createdUser && bcrypt.compareSync(password, createdUser.password)) {
      const token = generateToken(createdUser);
      res.cookie("token", token).json(createdUser);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//@desc   user logout function
//@route  POST /user/logout
async function userLogout(req, res) {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.status(200).send("Logout successful");
}

//@desc   retrieve user data for context provider
//@route  GET /api/user/profile
async function retrieveUserData(req, res) {
  const { token } = req.cookies;

  try {
    if (token) {
      const tokenData = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(tokenData.id);
      if (user) {
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
        } = user;
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
        return;
      }
    }

    res.json(null);
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(401).json({ error: "Invalid token" });
  }
}

//@desc   update user data
//@route  PATCH /api/user/profile/update
async function updateUserData(req, res) {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: req.body },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createUser,
  userLogin,
  userLogout,
  retrieveUserData,
  updateUserData,
};
