const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const historyDataSchema = new Schema({
History: {
    type: String,
    required: false,
  },
});

const History = model("historyDataSchema", historyDataSchema);

module.exports = History;
