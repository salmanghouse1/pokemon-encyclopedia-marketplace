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

  favs = { pokemonName: "Charizard", order: "8", Image: "http://" };

  const wishlistinitial = [];

  await User.findOneAndUpdate({
    firstName: "randomfirstname4652",
    lastName: "randomlastname4625",
    email: "randomlastname@tes4tmail2265.com",
    password: "password1234524526",
    wishlist: favs,
  });
});
