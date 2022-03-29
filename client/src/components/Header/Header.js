import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    // Nav routes
    <div class="container">
      <div>
        <header className="header">
          <nav class="navbar bg-base-100" Style="background:#131A22!important">
            <Link class="normal-case text-white primary-content" to="/">
              <h1>Pokemon Encyclopedia and Card Market</h1>
            </Link>

            <ul Style="background:purple;" class="m-6">
              <li>
                <Link to="/" class="btn btn-ghost normal-case text-md">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/game-stats"
                  class="btn btn-ghost normal-case text-md"
                >
                  GameStats
                </Link>
              </li>
              <li>
                <Link
                  to="/user/login"
                  class="btn btn-ghost normal-case text-md"
                >
                  Login to see Card Prices
                </Link>
              </li>
              <li>
                <Link to="/user" class="btn btn-ghost normal-case text-md">
                  User
                </Link>
              </li>
              <li>
                <Link to="/contact" class="btn btn-ghost normal-case text-md">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
