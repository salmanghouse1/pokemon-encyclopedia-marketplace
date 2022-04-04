const faker = require("faker");

const db = require("../config/connection");
const { Product, Category, User } = require("../models");
const fetch = require("node-fetch"); //npm install node-fetch
require("dotenv").config();
const { json } = require("express");

db.once("open", async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
  );
  const data = await response.json();

  console.log(data.results[0]);

  await User.deleteMany({});

  const favs = { Name: "Charizard", order: "8", Image: "http://" };

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  await User.findOneAndUpdate({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    wishlist: [favs],
  });
});
