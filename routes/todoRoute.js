// external import
const express = require("express");

// internal import
const { createTodo, getTodo } = require("../controllers/todoController");
const { isAuthenticated } = require("../middleware/Auth");

const router = express.Router();

router.route("/create").post(isAuthenticated, createTodo);
router.route("/alltodos").get(getTodo);

module.exports = router;
