const fetch = require("node-fetch"); //npm install node-fetch

fetch("https://pokeapi.co/api/v2/pokemon/charizard", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => {
    // Do something...
    console.log(json);
  })
  .catch((err) => console.log(err));
