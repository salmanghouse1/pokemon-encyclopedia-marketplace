const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const wishlistSchemaVar = require("./wishlist");
const historySchemaVar = require("./history");
const ownedSchemaVar = require("./owned");
const ordersSchemaVar = require("./orders");

const customerSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  wishlist: [wishlistSchemaVar.schema],
  history: [historySchemaVar.schema],
  owned: [ownedSchemaVar.schema],
  orders: [ordersSchemaVar.schema],
});



const customer = mongoose.model("Customer", customerSchema);

module.exports = customer;
