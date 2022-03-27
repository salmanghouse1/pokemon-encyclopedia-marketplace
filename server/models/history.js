const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const historySchema = new Schema({
  History: {
    type: String,
    required: false,
  },
});

const historySchemaVar = model("historyDataSchema", historyDataSchema);

module.exports = historySchemaVar;
