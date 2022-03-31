import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADMINLOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Admin(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [adminlogin, { error }] = useMutation(ADMINLOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await adminlogin({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.adminlogin.idTokenadmin;
      Auth.adminlogin(token);
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
    <form onSubmit={handleFormSubmit}>
      <div className="flex">
        <div
          className="items-center flex-none content-center"
          style={{ margin: "0 auto" }}
        >
          <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email/Username</span>
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
              <h2 className="card-title text-white">Login, Admin</h2>
              <p className="text-secondary">Enter Admin Details</p>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>

              <div className="card-actions justify-start">
                <Link to="/signup">
                  <div className="badge badge-outline-primary">
                    No I am not an admin
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

export default Admin;
