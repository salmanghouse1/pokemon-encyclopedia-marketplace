import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from "../Cart";
import Auth from "../../utils/auth";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="container">
          <div>
            <header className="header">
              <nav
                className="navbar bg-gray-800"
                style={{
                  background: "#131A22",
                  justifyContent: "space-between",
                }}
              >
                <Link className="normal-case text-white primary-content" to="/">
                  <h1>Pokemon Encyclopedia and Card Market</h1>
                </Link>

                <ul style={{ background: "purple" }} className="m-6">
                  <li>
                    <Link to="/" className="btn btn-ghost normal-case text-md">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/game-stats"
                      className="btn btn-ghost normal-case text-md"
                    >
                      GameStats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orderHistory"
                      className="btn btn-ghost normal-case text-md"
                    >
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user"
                      className="btn btn-ghost normal-case text-md"
                    >
                      User
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="btn btn-ghost normal-case text-md"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="/" onClick={() => Auth.logout()}>
                      Logout
                    </a>
                  </li>
                  <li>
                    <Cart />
                  </li>
                </ul>
              </nav>
            </header>
          </div>
          <div></div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div>
            <header className="header">
              <nav
                className="navbar bg-gray-800"
                style={{
                  background: "#131A22!important",
                  justifyContent: "space-between",
                }}
              >
                <Link className="normal-case text-white primary-content" to="/">
                  <h1>Pokemon Encyclopedia and Card Market</h1>
                </Link>

                <ul style={{ background: "purple" }} className="m-6">
                  <li>
                    <Link
                      to="/login"
                      className="btn btn-ghost normal-case text-md"
                    >
                      Login to see Card Prices
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="btn btn-ghost normal-case text-md"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="btn btn-ghost normal-case text-md"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
          <div></div>
        </div>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
