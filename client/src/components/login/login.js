import React from "react";
import { Link } from "react-router-dom";



const Login = () => {
  return (
    <div className="">
      <form>
        <label>
          Username
          <input type="text" />
        </label>

        <label>
          Username
          <input type="email" />
        </label>

        <label>
          Username
          <input type="password" />
        </label>
      </form>
      <Link to="/user/signup">
        <p>Signup</p>
      </Link>
    </div>
  );
};

export default Login;
