import React, { useEffect } from "react";
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

function ProductList() {
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
      <VideoBg>
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex place-items-center space-between flex-wrap">
          {filterProducts().map((product) => (
            <ProductItem
              key={Math.random() * 10000}
              _id={product._id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
