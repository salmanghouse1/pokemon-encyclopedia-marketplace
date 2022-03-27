// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    password:String
  }
  type getCard{
    id:String
    name:String
    number:String
    images:String
  }
  type getFavs{
_id:String
name:String
number:String
images:String
  }
  type Query {
    users: [User]
    getCard(id:!ID):[getCard]
    getFavs(_id:!ID):[getFavs]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;
