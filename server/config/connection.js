const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/pokemondb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;
