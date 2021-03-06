const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const ownedSchema = new Schema({
  owned: {
    type: String,
    required: false,
  },
});

const ownedSchemaVar = model("ownedDataSchema", ownedSchema);

module.exports = ownedSchemaVar;
