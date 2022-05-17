import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import VideoBg from "reactjs-videobg";
import mp4 from "../assets/videos/video.mp4";
import Auth from "../utils/auth";
import { gql, useQuery } from "@apollo/client";

import LikeButton from "../components/LikeButton/index";

const Home = () => {
  if (Auth.loggedIn()) {
    const GET_MYID = gql`
      query me {
        me {
          _id
        }
      }
    `;
    const { loading, data } = useQuery(GET_MYID);

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
              // "X-Api-Key": ,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Something Went Wrong");
        }
        const dataPokemons = await response.json();
        console.log(dataPokemons.data);

        console.log("My user id" + data.me._id);
        let transformedData = dataPokemons.data.map((dataPokemon) => {
          return {
            id: dataPokemon.id,
            name: dataPokemon.name,
            image: dataPokemon.images.small,
            setName: dataPokemon.set.name,
            setSeries: dataPokemon.set.series,
            price: dataPokemon.cardmarket.prices.averageSellPrice,
            // url: JSON.stringify(dataPokemon.cardmarket.prices.averageSellPrice)
            // myUserid:data.me
            userId: data.me._id,
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

        {!isLoading &&
          pokemons.length > 0 &&
          pokemons.map((pokemon) => {
            <div className="flex place-items-center space-between flex-wrap">
              <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
                {/* <Link> */}
                <figure>
                  <img alt={pokemon.name} src={`${pokemon.image}`} />
                </figure>
                {/* </Link> */}
                <div className="card-body">
                  <h2 className="card-title text-white">{pokemon.name}</h2>
                  <p className="text-secondary">{pokemon.url}</p>

                  <div className="card-actions justify-end">
                    <span></span>
                    <button
                      className="btn btn-primary"
                      // onClick={addToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="card-actions justify-start text-secondary">
                    <div className="badge badge-outline-primary">
                      {pokemon.name}|{pokemon.setName}|{pokemon.setSeries}
                    </div>
                    <LikeButton
                      userId={pokemon.userId}
                      postId={pokemon.id}
                      pokemonName={
                        pokemon.name +
                        "|" +
                        pokemon.setName +
                        "|" +
                        pokemon.setSeries
                      }
                      image={pokemon.image}
                      url={pokemon.url}
                    />
                    <div className="badge badge-outline-primary">
                      <b>{pokemon.url}</b>
                      {quantity} pluralize("item", quantity) in stock
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          })}
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
