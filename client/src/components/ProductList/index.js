import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS, QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import VideoBg from "reactjs-videobg";
// import ogg from "./videos/Neon.ogg";
// import webm from "./videos/Neon.webm";
import mp4 from "../../assets/videos/video.mp4";
// import poster from "./img/poster.jpg";

let retrievedData = "";

const [initialPokemon, setPokemon] = useState(false);

const [isLoading, setIsLoading] = usestate(false);

async function fetchData(event) {
  setIsLoading = true;
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards/?q=name%3APikachu}`,
    {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "00513ca8-3c29-47ac-8bb5-48c092395b9a",
      },
    }
  );

  const dataPokemons = await response.json();

  const transformedData = dataPokemons.results.map((dataPokemon) => {
    return {
      id: dataPokemon.id,
    };
  });
  setPokemon = transformedData;
  setIsLoading = false;
}

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { loading: allproductsLoading, data: allproductsData } =
    useQuery(QUERY_ALL_PRODUCTS);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (allproductsData) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: allproductsData.allproducts,
      });
      data.products.forEach((product) => {
        // idbPromise("products", "put", product);
      });
    }
    // else if (!loading) {
    //   // idbPromise("products", "get").then((products) => {
    //     dispatch({
    //       type: UPDATE_PRODUCTS,
    //       products: products,
    //     });
    //   });
    // }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div>
      <VideoBg>
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      <h2>Our Products:</h2>
      <form>
        <input type="text" onChange={fetchData}></input>
        <button></button>
      </form>
      {state.products.length ? (
        <div className="flex place-items-center space-between flex-wrap">
          {!isLoading && initialPokemon.length > 0 && (
            <ProductItem
              // key={Math.random() * 10000}
              pokemons={initialPokemon}
              // userId={user.id}
              // _id={product._id}
              // image={product.images.large}
              // name={product.name}
              // description={product.description}
              // price={product.price}
              // category={product.category}
              // quantity={product.quantity}
            />
          )}
          {!isLoading && initialPokemon.length === 0 && <p>Found no Pokemon</p>}
          {isLoading && <p>Loading...</p>}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
