import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TO_FAV = gql`
  mutation addToFav($email: String!, $password: String!) {
    addToFav(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADMINLOGIN = gql`
  mutation adminlogin($email: String!, $password: String!) {
    adminlogin(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
