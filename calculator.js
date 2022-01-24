// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.send("Thanks for posting that!");
});

app.listen(3000, function () {
  console.log("Server is running at port 3000.");
});
