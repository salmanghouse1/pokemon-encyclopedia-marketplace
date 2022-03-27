const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const wishlistSchema = new Schema({
  wishlist: {
    type: String,
    required: false,
  },
});

const wishlistSchemaVar = model("wishlistSchema", wishlistSchema);

module.exports = wishlistSchemaVar;
