import React from "react";
// import { QUERY_USER } from "../utils/queries";

const Contact = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="pokemon name"></input>
        <input type="email" placeholder="price"></input>
        <input type="message" placeholder="pokemon"></input>
        <button>Send</button>
        <button>Reset</button>
      </form>
    </div>
  );
};

export default Contact;
