const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const wishlistSchemaVar = require("./wishlist");
const historySchemaVar = require("./history");
const ownedSchemaVar = require("./owned");
const ordersSchemaVar = require("./orders");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
  wishlist: [wishlistSchemaVar.schema],
  history: [historySchemaVar.schema],
  owned: [ownedSchemaVar.schema],
  orders: [],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
