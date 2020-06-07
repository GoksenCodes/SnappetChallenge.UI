import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation";
import List from "./components/List";

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
        <List />
      </div>
    </div>
  );
}

export default App;
