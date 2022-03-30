import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <main>
      <div>
        <h4>Sign Me Up</h4>

        <form onSubmit={handleFormSubmit}>
          <div
            class="card w-96 glass flex-shrink ml-6 mr-6 mt-6"
            Style="margin:0 auto;"
          >
            <figure>
              <div class="form-control w-full max-w-xs">
                <label htmlFor="firstName">First Name:</label>
                <input
                  placeholder="First"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                  class="input input-bordered w-full max-w-xs"
                />
                <label htmlFor="firstName">Last Name:</label>

                <input
                  placeholder="Last"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                  class="input input-bordered w-full max-w-xs"
                />

                <label class="label">
                  <span class="label-text">Email</span>
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
              <h2 class="card-title text-white">Signup</h2>
              <p class="text-secondary">Fill Out</p>
              <div class="card-actions justify-end">
                <button type="submit" class="btn btn-primary">
                  Signup
                </button>
              </div>
              <div class="card-actions justify-start">
                <Link to="/login">
                  <div class="badge badge-outline-primary">
                    No I want to Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;