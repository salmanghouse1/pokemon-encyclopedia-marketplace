import React from "react";
// import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_WISHLIST } from "../../utils/mutations";
// import { LikeButton } from "../LikeButton/index";

function ProductItem(props, item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity, description, category } = item;

  const { cart } = state;

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
  const [wishlist, setWishlist] = useState("");

  function addToWishlist(idVar, nameVar, imgVar) {
    useMutation(ADD_TO_WISLIST, {
      variables: {
        email: "a",
        name: nameVar,
        id: idVar,
        name: nameVar + "|" + setNameVar + setSeriesVar,
        Image: imgVar,
      },
    });

    setWishlist(item);
  }

  return (
    <div className="flex place-items-center space-between flex-wrap">
      <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
        {/* <Link> */}
        <figure>
          <img alt={props.name} src={`${props.image}`} />
        </figure>
        {/* </Link> */}
        <div className="card-body">
          <h2 className="card-title text-white">{props.name}</h2>
          <p className="text-secondary">{props.url}</p>

          <div className="card-actions justify-end">
            <span></span>
            <button className="btn btn-primary" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
          <div className="card-actions justify-start text-secondary">
            <div className="badge badge-outline-primary">
              {props.name}|{props.setName}|{props.setSeries}
            </div>
            <div className="badge badge-outline-primary">
              <b>{props.url}</b>
              {quantity} pluralize("item", quantity) in stock
            </div>
            <div
              className="badge badge-outline-primary"
              onClick={addToWishlist(
                this.props.id,
                this.props.name +
                  "|set:" +
                  this.props.setName +
                  "|Series" +
                  this.props.setSeries,
                this.props.image
              )}
            >
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
