import "./App.css";

import { Header, Footer } from "./components/index";
// import { Hero } from "./components/Hero";
// import { Footer } from "./components/Footer";
// import { Login } from "./components/login";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
    <div>
      <Header />
      <Footer />
    </div>
    </MantineProvider>
  )
}

export default App;
