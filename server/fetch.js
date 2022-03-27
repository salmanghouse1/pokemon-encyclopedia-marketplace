const fetch = require("node-fetch"); //npm install node-fetch
const dotenv=require("./.env")
require('dotenv').config();



fetch("https://api.pokemontcg.io/v2/cards?q=name:gardevoir", {
  method: "GET",
  headers:{
      "X-Api-Key":process.env.api_key

  }
})
  .then((res) => res.json())
  .then((json) => {
    // Do something...
    console.log(json)
})
  .catch((err) => console.log(err));
