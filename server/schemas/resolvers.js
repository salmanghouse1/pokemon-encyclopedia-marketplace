const resolvers = {
  Query: {
    human(obj, args, context, info) {
      return context.db
        .loadHumanByID(args.id)
        .then((userData) => new Human(userData));
    },
  },
};
