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
import { ADD_TO_WISHLIST } from "../../utils/mutations";
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

    const [addWishlist, { dataWishlist }] = useMutation(ADD_TO_WISHLIST);

  return (
    <div>
      <h2>Our Products:</h2>
      <div className="flex place-items-center space-between flex-wrap">
        {pokemons.map((pokemon) => {
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
            <button className="btn btn-primary" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
          <div className="card-actions justify-start text-secondary">
            <div className="badge badge-outline-primary">
              {pokemon.name}|{pokemon.setName}|{pokemon.setSeries}
            </div>
            <div className="badge badge-outline-primary">
              <b>{pokemon.url}</b>
              {quantity} pluralize("item", quantity) in stock
            </div>
            <div className="badge badge-outline-primary" 
              onClick={(pokemon)=>{
                e.preventDefault();
                addWishlist({variables:{idInput,pokemon.name,pokemon.image,"3"}});
                              }} >
                                  ❤️Wishlist
            </div>

            <div className="badge badge-outline-primary">✔️Added</div>
          </div>
        </div>
        </div>
        })}
</div>
</div>          
  )

      }  

export default ProductList;
