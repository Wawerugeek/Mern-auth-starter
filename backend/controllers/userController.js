import expressAsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
// authenticate the user/set token
// route POST /api/users/auth
// access Public
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid password or email");
  }
});

// register user
// route POST /api/users

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// logout uuser
// route POST /api/users/logout
const logout = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout" });
});

// get user profile
// route GET /api/users/profile
// access private: jwt
const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "get user" });
});

// update user profile
// route PUT/api/users/profile
// access private: jwt
const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user" });
});

export { authUser, registerUser, logout, getUserProfile, updateUserProfile };
