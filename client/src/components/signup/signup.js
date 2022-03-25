// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const Signup = () => {
  return (
    <main>
      <div>
        <h4>Sign Up</h4>
        <div
          class="card w-96 glass flex-shrink ml-6 mr-6 mt-6"
          Style="margin:0 auto;"
        >
          <figure>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              ></input>
              <label class="label">
                <span class="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              ></input>

              <label class="label">
                <span class="label-text-alt">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              ></input>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-white">Signup</h2>
            <p class="text-secondary">Fill Out</p>
            <div class="card-actions justify-end">
              <Link to="">
                <button class="btn btn-primary">Signup</button>
              </Link>
            </div>
            <div class="card-actions justify-start">
              <Link to="/user/login">
                <div class="badge badge-outline-primary">Login</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
