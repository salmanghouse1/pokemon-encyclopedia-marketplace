import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import GameStats from "../../pages/GameStats";
import Home from "../../pages/Home";
import Profile from "../../pages/profile";
import User from "../../pages/user";
import Contact from "../../pages/Contact";
import Login from "../login/login";
import Signup from "../signup/signup";

const Header = () => {
  return (
    // Nav routes
    <div>
      <header>
        <Link className="text-light" to="/">
          <h1 className="m-0">Pokemon Encyclopedia and Card Market</h1>
        </Link>
        <nav>
          <Routes path="/">
            <Route path="user/login" element={<Login />}></Route>
            <Route path="user/signup" element={<Signup />}></Route>

            <Route index element={<Home />}></Route>
            <Route path="game-stats" element={<GameStats />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            {/* <Route path="user" element={<User />}></Route> */}
            <Route exact path="/profile/:username?" element={<Profile />} />
          </Routes>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game-stats">GameStats</Link>
            </li>
            <li>
              <Link to="/user/login">Login to see Card Prices</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
