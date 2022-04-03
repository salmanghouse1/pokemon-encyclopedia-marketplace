const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const wishlistSchema = new Schema({
  pokemonName: {
    type: String,
    required: true,
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
