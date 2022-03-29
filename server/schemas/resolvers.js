const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const fetch = require("node-fetch"); //npm install node-fetch

const resolvers = {
  Query: {
    GetUser: async (parent, args) => {
      const Users = User.find();
      return Users;
    },

    getPokemon: async (parent, args) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${args.name}/`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(Object.keys(data));
      const name = data.name;
      const order = data.order;
      console.log(order);
      console.log(name);
      return { name, order };
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
