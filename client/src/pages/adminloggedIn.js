import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
// import { QUERY_USER } from "../utils/queries";

const adminLoggedInComponent = () => {
  if (Auth.adminLoggedIn) {
    return (
      <div>
        <h1>Logged In Admin</h1>
        <button className="bg-gray-600">Update Data</button>
        <button className="bg-gray-600">Create Data</button>
        <button className="bg-gray-600">View Customer Data</button>
      </div>
    );
  } else {
    <div></div>;
  }
};
export default adminLoggedInComponent;
