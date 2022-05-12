import React from "react";
// import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_WISHLIST } from "../../utils/mutations";
import { gql, useLazyQuery, useMutation, useLazyMutation, useQuery } from "@apollo/client";
import { GET_MYID } from "../../utils/queries";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function ProductItem(props, item) {
  const GET_MYID = gql`
    query me {
      me {
        _id
      }
    }
  `;

  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const [state, dispatch] = useStoreContext();


  const { cart } = state;

  console.log("");

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

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

  const { loading, error, data } = useQuery(GET_MYID);

  // const [AddItemToWishlist, { loading, dataMYID }] =
  //   // useLazyQuery(dataID);
  console.log(loading);
  console.log(error);
  console.log(data.me._id);

  const idInput=data.me._id;

const ADD_TO_WISHLIST=gql`
mutation addToWishlist($id:String,$name:String,$Image:String,$order:String){
  addToWishlist(id:$id,Name:$name,Image:$Image,order:$order){
  _id
    firstName
    lastName
    email
    wishlist{
      _id
      Name
      Image
      order
      createdAt
    }
  }`

const [addToWishlistHandler, { data2, loading2, error2 }] = useMutation(ADD_TO_WISHLIST)  

  return (
    <div className="flex place-items-center space-between flex-wrap">
      <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
        {/* <Link> */}
        <figure>
          <img alt={props.Name} src={`${props.image}`} />
        </figure>
        {/* </Link> */}
        <div className="card-body">
          <h2 className="card-title text-white">{props.Name}</h2>
          <p className="text-secondary">{props.url}</p>

          <div className="card-actions justify-end">
            <span></span>
            <button className="btn btn-primary" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
          <div className="card-actions justify-start text-secondary">
            <div className="badge badge-outline-primary">
              {props.Name}|{props.setName}|{props.setSeries}
            </div>
            <div className="badge badge-outline-primary">
              <b>{props.url}</b>
              {quantity} pluralize("item", quantity) in stock
            </div>
            <div className="badge badge-outline-primary"
              onClick={(props)=>{useMutation(ADD_TO_WISHLIST,{variables:{idInput,props.Name,props.image,"3"}}}}>
                                  ❤️Wishlist
            </div>

            <div className="badge badge-outline-primary">✔️Added</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
