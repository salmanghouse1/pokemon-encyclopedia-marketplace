// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    email: String
    wishlist: [UserWishlist]
  }

  type Pokemon {
    name: String
    order: Int
  }

  type sprites {
    front_default: String
    front_shiny: String
  }
  type Category {
    _id: ID
    name: String
  }
  type UserWishlist {
    Name: String
    Image: String
    order: String
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  #  type stats(order:Int){

  #  }

  #  type PokemonDetails{
  #    _id:id
  #    ability: {
  # name: String
  # slot: String
  # icons: {
  # front_default: String
  # }
  # }
  # }
  type Auth {
    token: ID!
    user: User
  }
  type AdminUser {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  type AdminAuth {
    token: ID
    user: AdminUser
  }
  type Checkout {
    session: ID
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
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    me: User
    user: User
    allproducts: [Product]
    GetUser: User
    getPokemon(name: String!): Pokemon
    getProductWishlist(id: ID): [User]

    # query to use in graphql playground
    # query{
    #   getProductWishlist{
    #     firstName
    #     lastName
    #     wishlist{
    #       Name
    #     }
    #   }
    # }
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    # pokemon:Pokemon
    # pokemonDetails:PokemonDetails

    # getCard(id:!ID):[getCard]
    # getFavs(_id:!ID):[getFavs]
  }

  type Mutation {
    addToWishlist(
      email: String
      Name: String
      Image: String
      order: String
    ): User

    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    adminlogin(email: String!, password: String!): AdminAuth
  }
`;

module.exports = typeDefs;
