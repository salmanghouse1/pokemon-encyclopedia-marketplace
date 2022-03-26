const express = require("express");
const router = require("express").Router();

const app = express();

app.get("/user/cardData", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

module.exports = router;
