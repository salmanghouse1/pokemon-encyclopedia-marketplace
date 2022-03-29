import "./App.css";

import { Header, Footer } from "./components/index";
import GameStats from "./pages/GameStats";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Contact from "./pages/Contact";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>

          <Route path="user/login" element={<Login />}></Route>
          <Route path="user/signup" element={<Signup />}></Route>

          <Route path="game-stats" element={<GameStats />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          {/* <Route path="user" element={<User />}></Route> */}
          <Route exact path="/profile/:username?" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
