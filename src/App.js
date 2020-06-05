import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
