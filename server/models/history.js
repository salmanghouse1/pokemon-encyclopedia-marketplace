const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const historySchema = new Schema({
  history: {
    type: String,
    required: false,
  },
});

const historySchemaVar = model("historySchema", historySchema);

module.exports = historySchemaVar;
