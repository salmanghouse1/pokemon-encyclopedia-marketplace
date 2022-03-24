import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Login from "./../components/login/login";
import Signup from "./../components/signup/signup";

const User = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Link to="/login">
        <button>I have an account</button>
      </Link>
      <Link to="/signup">
        <p>I need an account</p>
      </Link>
    </div>
  );
};

export default User;
