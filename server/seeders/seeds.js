const faker = require("faker");

const db = require("../config/connection");
const { Product, Category, User } = require("../models");
const fetch = require("node-fetch"); //npm install node-fetch
require("dotenv").config();
const { json } = require("express");

db.once("open", async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
  );
  const data = await response.json();

  console.log(data.results[0]);

  // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(
  //       Math.random() * createdUsers.ops.length
  //     );
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

  // // create thoughts
  // let createdThoughts = [];
  // for (let i = 0; i < 100; i += 1) {
  //   const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  //   const createdThought = await Thought.create({ thoughtText, username });

  //   const updatedUser = await User.updateOne(
  //     { _id: userId },
  //     { $push: { thoughts: createdThought._id } }
  //   );

  //   createdThoughts.push(createdThought);
  // }
  // const createdHistory = await History.collection.insertMany();

  // // create reactions
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomThoughtIndex = Math.floor(
  //     Math.random() * createdThoughts.length
  //   );
  //   const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

  //   await Thought.updateOne(
  //     { _id: thoughtId },
  //     { $push: { reactions: { reactionBody, username } } },
  //     { runValidators: true }
  //   );
  // }

  await Category.deleteMany({});

  const categories = await Category.insertMany([
    { name: "Fire" },
    { name: "Water" },
    { name: "Grass" },
    { name: "Lightning" },
    { name: "Rock" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany({});

  const products = await Product.insertMany([
    {
      name: data.results[0].name,
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      category: {
        _id: categories[0]._id,
        name: categories[0].name,
      },
      price: 2.99,
      quantity: 500,
    },
    {
      name: data.results[1].name,
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
    },
    {
      name: data.results[2].name,
      category: {
        _id: categories[1]._id,
        name: categories[1].name,
      },
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      price: 7.99,
      quantity: 20,
    },
    {
      name: data.results[3].name,
      category: {
        _id: categories[2]._id,
        name: categories[2].name,
      },
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      price: 3.99,
      quantity: 50,
    },
    {
      name: data.results[4].name,
      category: {
        _id: categories[3]._id,
        name: categories[3].name,
      },
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      price: 14.99,
      quantity: 100,
    },
    {
      name: data.results[5].name,
      category: {
        _id: categories[1]._id,
        name: categories[1].name,
      },
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      price: 399.99,
      quantity: 30,
    },
    {
      name: data.results[6].name,
      category: {
        _id: categories[1]._id,
        name: categories[1].name,
      },
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      price: 199.99,
      quantity: 30,
    },
    {
      name: data.results[7].name,
      category: {
        _id: categories[2]._id,
        name: categories[2].name,
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      price: 9.99,
      quantity: 100,
    },
    {
      name: data.results[8].name,
      category: {
        _id: categories[0]._id,
        name: categories[0].name,
      },
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: data.results[9].name,
      category: {
        _id: categories[0]._id,
        name: categories[0].name,
      },
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: data.results[10].name,
      category: {
        _id: categories[0]._id,
        name: categories[0].name,
      },
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      price: 7.99,
      quantity: 100,
    },
    {
      name: data.results[11].name,
      category: {
        _id: categories[0]._id,
        name: categories[0].name,
      },
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log("products seeded");
  await User.deleteMany({});

  // create user data
  // const userData = [];

  // for (let i = 0; i < 50; i += 1) {
  //   const firstName = faker.internet.userName();
  //   const lastName = faker.internet.userName();
  //   const email = faker.internet.email(firstName + lastName);
  //   const password = faker.internet.password();

  //   userData.push({ firstName, lastName, email, password });
  // }

  // const createdUsers = await User.collection.insertMany(userData);

  await User.create({
    firstName: "Salman",
    lastName: "Ghoue",
    email: "admin@gmail.com",
    password: "p@ssw0rd12345@!",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");
  console.log("all done!");
  process.exit();
});
