import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="flex">
      <div class="items-center flex-none content-center" Style="margin:0 auto;">
        <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
          <figure>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email/Username</span>
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
            <h2 class="card-title text-white">Login</h2>
            <p class="text-secondary">Enter Login Details</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="card-actions justify-start">
              <Link to="/user/signup">
                <div class="badge badge-outline-primary">Signup</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
