import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from "../Cart/";
import Auth from "../../utils/auth";

function Header() {
  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <div>
          <header className="header">
            <nav
              className="navbar bg-gray-100"
              style={{ background: "#131A22!important" }}
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
                    to="/login"
                    className="btn btn-ghost normal-case text-md"
                  >
                    Login to see Card Prices
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
              className="navbar bg-gray-100"
              style={{ background: "#131A22!important" }}
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
                    to="/login"
                    className="btn btn-ghost normal-case text-md"
                  >
                    Login to see Card Prices
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
              </ul>
            </nav>
          </header>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Header;
