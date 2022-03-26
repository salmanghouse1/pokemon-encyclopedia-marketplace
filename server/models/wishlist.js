const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const wishlistDataSchema = new Schema({
  
  wishlist: {
    type: String,
    required: false,
  }
});

const Wishlist = model("wishlistDataSchema", wishlistDataSchema);

module.exports = Wishlist;
