import React, { useState } from "react";

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  let retrievedData = "";

  const [pokemons, setPokemons] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.pokemontcg.io/v2/cards/?q=name%3Acharizard",
        {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            // "X-Api-Key": "add your api key here",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const dataPokemons = await response.json();
      console.log(dataPokemons.data);
      let transformedData = dataPokemons.data.map((dataPokemon) => {
        return {
          id: dataPokemon.id,
          name: dataPokemon.name,
          image: dataPokemon.images.small,
        };
      });
      console.log(transformedData);
      setPokemons(transformedData);
      console.log(pokemons);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }
  return (
    <div className="container">
      <CategoryMenu />
      <form>
        <input type="text" onChange={fetchData}></input>
        <button></button>
      </form>

      {!isLoading && pokemons.length > 0 && <ProductList pokemons={pokemons} />}
      {!isLoading && pokemons.length === 0 && !error && <p>Found no Pokemon</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}

      <Cart />
    </div>
  );
};

export default Home;
