const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const wishlistSchema = new Schema({
  Name: {
    type: String,
  },
  Image: {
    type: String,
  },
  order: {
    type: String,
  },
});

const Wishlist = model("Wishlist", wishlistSchema);

module.exports = Wishlist;
