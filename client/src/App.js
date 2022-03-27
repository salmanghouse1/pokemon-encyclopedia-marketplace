import "./App.css";

import { Header, Footer } from "./components/index";
import GameStats from "./pages/GameStats";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Contact from "./pages/Contact";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Routes, Route } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>

          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>

          <Route path="game-stats" element={<GameStats />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          {/* <Route path="user" element={<User />}></Route> */}
          <Route exact path="/profile/:username?" element={<Profile />} />
        </Route>
      </Routes>
    </ApolloProvider>
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
