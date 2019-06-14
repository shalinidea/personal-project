import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../index.css";
import Landscapes from "../Landscapes";
import Buildings from "../Buildings";
import Exhibitions from "../Exhibitions";
import Collaborations from "../Collaborations";
import Interests from "../Interests";
import Others from "../Others";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Landscapes" exact component={Landscapes} />
          <Route path="/Buildings" exact component={Buildings} />
          <Route path="/Exhibitions" exact component={Exhibitions} />
          <Route path="/Collaborations" exact component={Collaborations} />
          <Route path="/Interests" exact component={Interests} />
          <Route path="/Others" exact component={Others} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
