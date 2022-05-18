// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String

    email: String
    wishlist: [Wishlist]
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
  type Wishlist {
    _id: ID
    Name: String
    Image: String
    order: String
    postId: String
    createdAt: String
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
    users: [User]
    user(email: String!): User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    me: User
    allproducts: [Product]
    GetUser: User
    getPokemon(name: String!): Pokemon
    getProductWishlist(id: ID): [User]
    Wishlists(email: String): [Wishlist]
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
    addToWishlist(postId: String, id: String, Name: String, Image: String): User

    addPokemonToWishlist(pokemonId: String!): User

    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    adminlogin(email: String!, password: String!): AdminAuth
  }
`;

module.exports = typeDefs;
