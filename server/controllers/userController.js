// interal import
const User = require("../models/UserModel");
const loginToken = require("../utils/loginToken");

// register new user
exports.registerUser = async (req, res, next) => {
  const { name, org, email, password } = req.body;
  try {
    if (!name && !org && !email && !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter the value first",
      });
    }
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should be 8 character must",
      });
    }
    const user = await User.create({ name, org, email, password });
    loginToken(user, 201, "User registered successfully", res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// login user
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email && !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter the value first",
      });
    }
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credential",
      });
    }
    loginToken(user, 200, "User login successfully", res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// auth user
exports.authUser = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      isAuthenticated: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
