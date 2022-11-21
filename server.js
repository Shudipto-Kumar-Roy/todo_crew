// external import
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

// internal import
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
const connectToDatabase = require("./config/database");

// setting environment variable
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}
// creating app
const app = express();
const PORT = process.env.PORT || 5000;

// database connection
connectToDatabase();

// middleware
app.use(express.json());
app.use(cookieParser());

// setting route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/todo", todoRoute);

// For hosting
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});
// end of For hosting

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
