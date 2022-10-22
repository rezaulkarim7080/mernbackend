const mongoose = require("mongoose");
// const app = require("../app");

mongoose
  .connect("mongodb://localhost:27017/Thappapractice")
  .then(() => console.log("Connected MongoDB"))
  .catch((err) => console.log("Failed !!"));
