import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (


              <div class="flex place-items-center space-between flex-wrap">
                <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
      <Link to={`/products/${_id}`}>
                  <figure>
                    <img
          alt={name}
          src={`/images/${image}`}
                    />
                  </figure>
                  </Link>
                  <div class="card-body">
                    <h2 class="card-title text-white">Life hack</h2>
                    <p class="text-secondary">
                      How to park your car at your garage?
                    </p>

                    <div class="card-actions justify-end">
                      <span>${price}</span>
                      <button class="btn btn-primary" onClick={addToCart}>Add To Cart</button>
                    </div>
                    <div class="card-actions justify-start text-secondary">
                      <div class="badge badge-outline-primary">Fashion</div>
                      <div class="badge badge-outline-primary">Products</div>
                    </div>
                  </div>
                </div>
              </div>
  )}


export default ProductItem;
