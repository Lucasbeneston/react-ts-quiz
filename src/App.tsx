import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/organisms/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
