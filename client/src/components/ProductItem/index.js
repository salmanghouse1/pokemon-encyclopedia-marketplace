import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_WISHLIST } from "../../utils/mutations";
import { userIdContextName } from "../../pages/Home";

import { GET_MYID } from "../../utils/queries";
import LikeButton from "./../LikeButton/index";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function ProductItem(props) {
  const value = React.useContext(userIdContextName);

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
    <div className="flex place-items-center space-between flex-wrap">
      <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
        {/* <Link> */}
        <figure>
          <img alt={props.name} src={`${props.image}`} />
        </figure>
        {/* </Link> */}
        <div className="card-body">
          <h2 className="card-title text-white">
            {props.name}|{props.set}|{props.series}
          </h2>
          <p className="text-secondary">
            {props.name}|{props.set}|{props.series}
          </p>

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
              {props.name}|{props.set}|{props.series}
            </div>
            <LikeButton
              userId={value}
              postId={props.id}
              pokemonName={props.name + "|" + props.set + "|" + props.series}
              image={props.image}
            />
            <div className="badge badge-outline-primary">
              <b></b>
              pluralize("item", quantity) in stock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
