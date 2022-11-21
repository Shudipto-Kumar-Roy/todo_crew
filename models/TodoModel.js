// external import
const mongoose = require("mongoose");
let date = new Date();
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  designation: {
    type: String,
    required: [true, "Please enter your designation"],
    trim: true,
  },
  date: {
    type: String,
    default: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    required: true,
  },
  todaytask: [
    {
      name: {
        type: String,
        required: [true, "Task name is required"],
      },
      status: {
        type: String,
        default: "done",
        required: [true, "Status is required"],
      },
      reason: {
        type: String,
      },
    },
  ],
  nextdaytask: {
    date: {
      type: String,
      default: `${date.getDate()+1}-${date.getMonth() + 1}-${date.getFullYear()}`,
      required: true,
    },
    tasks: [
      {
        name: {
          type: String,
          required: [true, "Task name is required"],
        },
      },
    ],
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
