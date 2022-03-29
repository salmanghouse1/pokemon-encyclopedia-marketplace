import "./App.css";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import GameStats from "./pages/GameStats";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Contact from "./pages/Contact";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Detail from "./pages/Detail";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
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

          <Route exact path="/success" component={Success} />
          <Route exact path="/orderHistory" component={OrderHistory} />
          <Route exact path="/products/:id" component={Detail} />
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
