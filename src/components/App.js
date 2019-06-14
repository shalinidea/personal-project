import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
