import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import VideoBg from "reactjs-videobg";
import mp4 from "../assets/videos/video.mp4";
import Auth from "../utils/auth";
import { gql, useQuery } from "@apollo/client";

import car from "./../assets/img/bg.jpeg";
import LikeButton from "../components/LikeButton/index";

let userIdContextName = createContext();

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

    console.log(data);
    let textInput = React.createRef();
    let retrievedData = "";
    const [pokemons, setPokemons] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    async function fetchData() {
      setIsLoading(true);
      console.log("Enter");
      try {
        const response = await fetch(
          `https://api.pokemontcg.io/v2/cards/?q=name%3A${textInput.current.value}`,
          {
            method: "GET", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "bfdb3ffa-1d4b-46c6-9e47-8a353e633eba",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Something Went Wrong");
        }
        const dataPokemons = await response.json();
        console.log(dataPokemons.data);

        console.log("My user id" + data.me._id);
        let transformedDatas = dataPokemons.data.map((dataPokemon) => {
          return {
            postId: dataPokemon.id,

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
        console.log("return" + transformedDatas);

        setPokemons(transformedDatas);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      }
    }
    const style = {
      backgroundImage: "url(" + "./../assets/img/bg.jpeg" + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url(${car})`,
          height: "100%;",
          position: "absolute",
        }}
      >
        <CategoryMenu />

        <input
          type="text"
          className="input input-primary"
          ref={textInput}
        ></input>
        <button className="btn btn-primary" onClick={fetchData}>
          Get Cards
        </button>
        <div className="flex place-items-center space-between flex-wrap">
          {!isLoading && pokemons.length > 0 && (
            <userIdContextName.Provider value={data.me._id}>
              <ProductList pokemons={pokemons} value={data.me._id} />
            </userIdContextName.Provider>
          )}
          {!isLoading && pokemons.length === 0 && !error && (
            <p>Found no Pokemon</p>
          )}
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error}</p>}
        </div>
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

export { userIdContextName };
export default Home;
