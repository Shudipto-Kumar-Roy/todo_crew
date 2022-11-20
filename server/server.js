// external import
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// internal import
const userRoute = require("./routes/userRoute");
const connectToDatabase = require("./config/database");

// setting environment variable
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "server/config/config.env" });
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

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
