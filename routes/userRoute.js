// external import
const express = require("express");

// internal import
const {
  registerUser,
  loginUser,
  authUser,
  logoutUser,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/Auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/auth").get(isAuthenticated, authUser);

module.exports = router;
