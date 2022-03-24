// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";
import React from "react";
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <main>
      <div>
        <div>
          <h4>Sign Up</h4>
          <div>
            <form onSubmit="">
              <input />
              <input
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value="{formState.email}"
              />
              <input
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value="{formState.password}"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Link to="/user/login">
        <p>Login</p>
      </Link>
    </main>
  );
};

export default Signup;
