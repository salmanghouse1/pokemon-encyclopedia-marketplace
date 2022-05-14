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

function ProductList(props) {
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
      <h2>Our Products:</h2>
      <div className="flex place-items-center space-between flex-wrap">
        {props.pokemons.map((pokemon) => (
          <ProductItem
            key={pokemon.id}
            image={pokemon.image}
            Name={pokemon.name}
            url={pokemon.url}
            setName={pokemon.setName}
            setSeries={pokemon.setSeries}
          price={pokemon.price}
            />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
