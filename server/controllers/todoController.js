// internal import
const Todo = require("../models/TodoModel");

// creating todo
exports.createTodo = async (req, res, next) => {
  const { name, designation, todaytask, nextdaytask } = req.body;
  try {
    if (!name && !designation && !todaytask && !nextdaytask) {
      return res.status(400).json({
        success: false,
        message: "Please fill the value properly",
      });
    }
    const todo = await Todo.create({
      name,
      designation,
      todaytask,
      nextdaytask,
    });
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all todo
exports.getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      message: "Featching todos success",
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
