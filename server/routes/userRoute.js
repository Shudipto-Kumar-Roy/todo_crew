// external import
const express = require("express");

// internal import
const { registerUser, loginUser } = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/Auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/protected").get(isAuthenticated, (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Crew Learning Institute",
  });
});

module.exports = router;
