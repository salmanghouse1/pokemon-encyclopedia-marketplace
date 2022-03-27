// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    email: String
  }

  # type getCard{
  #   id:String
  #   name:String
  #   number:String
  #   images:String
  # }
  type Auth {
    token: ID
    user: User
  }
  # type Product {
  #   _id: ID
  #   name: String
  #   description: String
  #   image: String
  #   quantity: Int
  #   price: Float
  #   category: Category
  # }

  #   type getFavs{
  # _id:String
  # name:String
  # number:String
  # images:String
  #   }
  type Query {
    user: User
    GetUser: User
    # getCard(id:!ID):[getCard]
    # getFavs(_id:!ID):[getFavs]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstname: String!
      lastname: String!
      email: String!
      password: String!
    ): Auth
  }
`;

module.exports = typeDefs;
