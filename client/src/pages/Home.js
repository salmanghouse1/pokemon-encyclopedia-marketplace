import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import VideoBg from "reactjs-videobg";
import mp4 from "../assets/videos/video.mp4";
import Auth from "../utils/auth";
const Home = () => {
  if (Auth.loggedIn()) {
    let textInput = React.createRef();
    let retrievedData = "";

    const [pokemons, setPokemons] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.pokemontcg.io/v2/cards/?q=name%3A${textInput.current.value}`,
          {
            method: "GET", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "efc04806-288e-44c7-96cc-fe41fd5d9631",
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
            setName: dataPokemon.set.name,
            setSeries: dataPokemon.set.series,
            price: dataPokemon.cardmarket.prices.averageSellPrice,
            // url: JSON.stringify(dataPokemon.cardmarket.prices.averageSellPrice)
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
        <VideoBg>
          <VideoBg.Source src={mp4} type="video/mp4" />
        </VideoBg>
        <CategoryMenu />
        <input
          type="text"
          className="input input-primary"
          ref={textInput}
        ></input>
        <button className="btn btn-primary" onClick={fetchData}>
          Get Cards
        </button>

        {!isLoading && pokemons.length > 0 && (
          <ProductList pokemons={pokemons} />
        )}
        {!isLoading && pokemons.length === 0 && !error && (
          <p>Found no Pokemon</p>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}

        <Cart />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello</h1>
              <p className="py-6">Welcome</p>
              <Link to="/login">
                <button className="btn btn-primary">Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
