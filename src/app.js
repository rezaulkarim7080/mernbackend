const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
require("./db/server");
const hbs = require("hbs");

const port = process.env.PORT || 3000;

/// TODO: Conncet path of HTML CSS for rendering///
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

/// TODO: Conncet path of HTML CSS for rendering///
//const static_path = path.join(__dirname, "../public");
// const template_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname, "../templates/partials");

//app.use(express.static(static_path));
// app.set("view engine", "hbs");
// app.set("views", template_path);
// hbs.registerPartials(partials_path);

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.send("hello from App js");
});

app.listen(port, () => {
  console.log(`listining port ${port}`);
});

//module.export = app;
