import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../index.css";
import Page from "./Page";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/Landscapes"
            exact
            render={() => {
              return <Page title="Landscapes" />;
            }}
          />
          <Route
            path="/Buildings"
            exact
            render={() => {
              return <Page title="Buildings" />;
            }}
          />
          <Route
            path="/Exhibitions"
            exact
            render={() => {
              return <Page title="Exhibitions" />;
            }}
          />
          <Route
            path="/Collaborations"
            exact
            render={() => {
              return <Page title="Collaborations" />;
            }}
          />
          <Route
            path="/Interests"
            exact
            render={() => {
              return <Page title="Interests" />;
            }}
          />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
