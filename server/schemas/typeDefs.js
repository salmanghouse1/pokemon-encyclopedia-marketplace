// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Pokemon {
    name: String
    order: Int
  }

  type sprites {
    front_default: String
    front_shiny: String
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
    getPokemon(name: String!): Pokemon
    # pokemon:Pokemon
    # pokemonDetails:PokemonDetails

    # getCard(id:!ID):[getCard]
    # getFavs(_id:!ID):[getFavs]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
  }
`;

module.exports = typeDefs;
