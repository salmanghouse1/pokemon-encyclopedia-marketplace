// import json webtoken
const jwt = require("jsonwebtoken");
const expiration = "2h";
// create a secret variable
const secret = "thisisasecret";

// export a sign token assgn the email user id and username
module.exports = {
  signToken: function (email, _id) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  // attatch a payload the payload is the email user id and username
  // return the signed token in jwt sign method
};

// const jwt = require("jsonwebtoken");

// const secret = "newsecret";

// module.exports = {
//   authMiddleware: function ({ req }) {
//     // allows token to be sent via req.body, req.query, or headers
//     let token = req.body.token || req.query.token || req.headers.authorization;

//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token.split(" ").pop().trim();
//     }

//     if (!token) {
//       return req;
//     }

//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log("Invalid token");
//     }

//     return req;

//   },
//   signToken: function ({ firstName, email, _id }) {
//     const payload = { firstName, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },

// };
