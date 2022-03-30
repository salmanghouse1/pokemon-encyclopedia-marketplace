import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <form>
      <div class="flex">
        <div
          class="items-center flex-none content-center"
          Style="margin:0 auto;"
        >
          <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email/Username</span>
                </label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  class="input input-bordered w-full max-w-xs"
                ></input>

                <label class="label">
                  <span class="label-text-alt">Password</span>
                </label>

                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  class="input input-bordered w-full max-w-xs"
                ></input>
              </div>
            </figure>
            <div class="card-body">
              <h2 class="card-title text-white">Login</h2>
              <p class="text-secondary">Enter Login Details</p>
              <div class="card-actions justify-end">
                <Link to="/game-stats">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </Link>
              </div>

              <div class="card-actions justify-start">
                <Link to="/signup">
                  <div class="badge badge-outline-primary">
                    No I want to Sign Up
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
