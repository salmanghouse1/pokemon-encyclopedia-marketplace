import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from "../Cart";
import Auth from "../../utils/auth";

function Nav() {

  function showNavigation(){
  if (Auth.loggedIn()) {
    return (
      <div class="container">
        <div>
          <header className="header">
            <nav
              class="navbar bg-base-100"
              Style="background:#131A22!important"
            >
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
                    to="/orderHistory"
                    class="btn btn-ghost normal-case text-md"
                  >
                    Order History
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
      <div class="container">
        <div>
          <header className="header">
            <nav
              class="navbar bg-base-100"
              Style="background:#131A22!important"
            >
              <Link class="normal-case text-white primary-content" to="/">
                <h1>Pokemon Encyclopedia and Card Market</h1>
              </Link>

              <ul Style="background:purple;" class="m-6">
                <li>
                  <Link to="/login" class="btn btn-ghost normal-case text-md">
                    Login to see Card Prices
                  </Link>
                </li>
                <li>
                  <Link to="/signup" class="btn btn-ghost normal-case text-md">
                    Signup
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
        <div></div>
      </div>
    );
  }
}
return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}


export default Nav;
