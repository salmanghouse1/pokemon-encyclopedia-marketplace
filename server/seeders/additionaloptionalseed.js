const faker = require("faker");

const db = require("../config/connection");
const { Product, Category, User, Wishlist } = require("../models");
const fetch = require("node-fetch"); //npm install node-fetch
require("dotenv").config();
const { json } = require("express");

db.once("open", async () => {
  //   const response = await fetch(
  //     "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
  //   );
  //   const data = await response.json();

  //   console.log(data.results[0]);

  await User.deleteMany({});

  const favs = { Name: "Charizard", Image: "http://", order: "8" };

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    wishlist: [{ Name: "", Image: "", order: "" }],
  });

  const userUpdate = await User.findOne({
    email: "eholt@testmail.com",
  });

  // userUpdate.wishlist[0].Name = "Charizard";
  // userUpdate.wishlist[0].Image = "google.com";
  // userUpdate.wishlist[0].order = "8";

  // console.log(userUpdate.wishlist);

  // const updated = await userUpdate.save();
  // console.log("console Log" + updated);
  // console.log(userUpdate.wishlist.Name);

  // userUpdate.wishlist.push({
  //   Name: "Squirtle",
  //   Image: "google.com",
  //   order: "11",
  // });

  // db.user.save(userUpdate);

  await User.findOneAndUpdate(
    { email: "eholt@testmail.com" },
    {
      $push: {
        wishlist: { Name: "Squirtle", Image: "google.com", order: "11" },
      },
    }
  );
  await User.findOneAndUpdate(
    { email: "eholt@testmail.com" },
    {
      $push: {
        wishlist: { Name: "wartortle", Image: "google.com", order: "11" },
      },
    }
  );
  console.log(await User.find({}).populate("wishlist"));
  /* 

QUERY:
query{
  getProductWishlist{
    firstName
    lastName
    wishlist{
      Name
    }
  }
}*/

  process.exit();
});
