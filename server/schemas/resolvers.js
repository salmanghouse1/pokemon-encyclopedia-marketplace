const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Product, Wishlist } = require("../models");
const { signToken, authMiddleware } = require("../utils/auth");
// const fetch = require("node-fetch"); //npm install node-fetch
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    getProductWishlist: async (parent, { _id }, context) => {
      userResult = await User.find({}).populate("wishlist");
      console.log(userResult);
      return userResult;
      // return User.find(
      //   (getProductWishlist) => getProductWishlist.id === args.id
      // ).populate("wishlist");
    },
    Wishlists: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Wishlist.find(params).sort({ createdAt: -1 });
    },
    GetUser: async (parent, args) => {
      const Users = User.find();
      return Users;
    },
    allproducts: async () => {
      return await Product.find().populate("category");
    },

    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("wishlist");
    },
    // get a user by username
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select("-__v -password")
        .populate("wishlist");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
    me: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("wishlist");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
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
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("wishlist");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
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
    addToWishlist: async (parent, args, context) => {
      if (context.user) {
        const wishlistItemToAdd = await Wishlist.create({
          ...args,
          username: context.user.username,
        });
        const results = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              wishlist: {
                Name: args.Name,
                Image: args.Image,
                order: args.order,
              },
            },
          },
          { new: true }
        );
        return results;
      }
      // return results;
      //   { email: context.user._id },
      //   {
      //     $push: {
      //       wishlist: { Name: args.Name, Image: args.Image, order: args.order },
      //     },
      //   },
      //   { new: true }
      // );

      // return results;
    },

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
