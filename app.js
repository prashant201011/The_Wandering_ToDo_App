const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const todoRoute = require("./routes/todo");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.6em0yhh.mongodb.net/${process.env.DATABASE}`;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(todoRoute);

app.use(compression());

mongoose
  .connect(MONGO_URI)
  .then((connected) => {
    console.log("connected to database");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
