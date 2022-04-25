import { gql } from "@apollo/client";




export const QUERY_PRODUCTS = gql`
  query products($category: ID, $name: String) {
    products(category: $category, name: $name) {
      name
      quantity
      image
      price
      category {
        _id
        name
      }
      description
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query allproducts {
    allproducts {
      name
      price
      image
      category {
        _id
        name
      }
      description
      quantity
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

// export const QUERY_ADD_TO_WISHLIST=

// gql`

// `

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
