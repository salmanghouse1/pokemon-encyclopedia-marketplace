const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
// const Wishlist = require("./wishlist");
const historySchemaVar = require("./history");
const ownedSchemaVar = require("./owned");
const Order = require("./Order");
const dateFormat = require("../utils/dateFormat");
// const Wishlist = require("./wishlist");



const wishlistSchema = new Schema({
  email:{
    type:String
  },
  Name: {
    type: String,
  },
  Image: {
    type: String,
  },
  order: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  wishlist: [wishlistSchema],
  // history: [historySchemaVar.schema],
  // owned: [ownedSchemaVar.schema],
  // orders: [Order.schema],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = { User, Wishlist };
