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
            className="card w-96 glass flex-shrink ml-6 mr-6 mt-6"
            style={{ margin: "0 auto" }}
          >
            <figure>
              <div className="form-control w-full max-w-xs">
                <label htmlFor="firstName">First Name:</label>
                <input
                  placeholder="First"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs"
                />
                <label htmlFor="firstName">Last Name:</label>

                <input
                  placeholder="Last"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs"
                />

                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs"
                ></input>

                <label className="label">
                  <span className="label-text-alt">Password</span>
                </label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs"
                ></input>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Signup</h2>
              <p className="text-secondary">Fill Out</p>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </div>
              <div className="card-actions justify-start">
                <Link to="/login">
                  <div className="badge badge-outline-primary">
                    No I want to Login!!!
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
