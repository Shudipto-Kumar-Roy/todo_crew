// external import
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.isAuthenticated = async (req, res, next) => {
  const { logintoken } = req.cookies;
  try {
    if (!logintoken) {
      return res.status(400).json({
        success: false,
        message: "Please login to first",
      });
    }
    const decodedData = jwt.verify(logintoken, process.env.JWT_SECRET);
    const rootUser = await User.findById(decodedData.id);
    req.user = rootUser;
    req.token = logintoken;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
