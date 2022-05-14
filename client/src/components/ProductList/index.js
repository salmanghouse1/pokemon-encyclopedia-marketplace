import React, { useEffect, useState } from "react";

// import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";

// import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
// import { QUERY_ALL_PRODUCTS, QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import VideoBg from "reactjs-videobg";
// import ogg from "./videos/Neon.ogg";
// import webm from "./videos/Neon.webm";
import mp4 from "../../assets/videos/video.mp4";
// import poster from "./img/poster.jpg";
import LikeButton from "../LikeButton/index";
import gql from "graphql-tag";

function ProductList(pokemons) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  console.log("THe pokemons" + pokemons);

  return (
    <div>
      <h2>Our Products:</h2>
      <div className="flex place-items-center space-between flex-wrap">
        
      </div>
    </div>
  );
}
export default ProductList;
