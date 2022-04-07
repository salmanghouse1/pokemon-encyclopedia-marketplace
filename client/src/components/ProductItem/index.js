import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_WISHLIST } from "../../utils/mutations";








function ProductItem(item) {
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

  const addToWishlistFunc = (event,Name) => {
    event.preventDefault();
const [addWishlist] = useMutation(ADD_TO_WISHLIST);

  useEffect(() => {
    async function saveWishlist() {
      
        const { data } = await addToWishlist({ variables: {Name,order,Image  } });
        
      }
  }
  )}
  

  return (
    <div className="flex place-items-center space-between flex-wrap">
      <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
        <Link to={`products/${_id}`}>
          <figure>
            <img alt={name} src={`${image}`} />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <p className="text-secondary">{description}</p>

          <div className="card-actions justify-end">
            <span>$</span>
            <button className="btn btn-primary" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
          <div className="card-actions justify-start text-secondary">
            <div className="badge badge-outline-primary">{category.name}</div>
            <div className="badge badge-outline-primary">
              <b>{price}</b>
              {quantity} {pluralize("item", quantity)} in stock
            </div>
            <div className="badge badge-outline-primary" onClick={addToWishlistFunc(this.name,this.image,this._id)}>
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
