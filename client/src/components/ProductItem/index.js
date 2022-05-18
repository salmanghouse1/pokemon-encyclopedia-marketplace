import React from "react";
// import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_WISHLIST } from "../../utils/mutations";
import {
  gql,
  useLazyQuery,
  useMutation,
  useLazyMutation,
  useQuery,
} from "@apollo/client";
import { GET_MYID } from "../../utils/queries";
import LikeButton from "./../LikeButton/index";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function ProductItem(props, item, loadingData, pokemonData) {
  //   const addToWishlistFunc = (event,Name) => {
  //     event.preventDefault();
  // const [addWishlist] = useMutation(ADD_TO_WISHLIST);

  //   useEffect(() => {
  //     async function saveWishlist() {

  //         const { data } = await addToWishlist({ variables: {Name,order,Image  } });

  //       }
  //   }
  //   )}
  // const [wishlist, setWishlist] = useState("");

  // const [likePokemon] = useMutation;

  // const [AddItemToWishlist, { loading, dataMYID }] =
  //   // useLazyQuery(dataID);

  return (
    <div className="container">
      {!isLoading &&
        pokemons.length > 0 &&
        pokemons.map((pokemon) => {
          <div
            key={pokemon.id + pokemon.name}
            className="card w-96 glass flex-shrink ml-6 mr-6 mt-6"
          >
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
                  pluralize("item", quantity) in stock
                </div>
              </div>
            </div>
          </div>;
        })}
      {!isLoading && pokemons.length === 0 && !error && <p>Found no Pokemon</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}

      <Cart />
    </div>
  );
}

export default ProductItem;
