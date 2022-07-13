import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import Home from "./components/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
