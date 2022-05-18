import React, { useEffect, useState } from "react";

// import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import ProductItem from "./../ProductItem/index";
// import { UPDATE_PRODUCTS } from "../../utils/actions";

function ProductList(props) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  return (
    <div>
      <h2>Our Products:</h2>
      <div className="flex place-items-center space-between flex-wrap">
        {props.pokemons.map((pokemon) => (
          <ProductItem
            key={pokemon.id + pokemon.name}
            image={pokemon.image}
            name={pokemon.name}
            set={pokemon.setName}
            series={pokemon.setSeries}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
