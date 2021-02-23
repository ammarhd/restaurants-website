import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Restaurants from "./components/mainPage";
import FavoriteRes from "./components/favoriteRes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Restaurants />
        </Route>
        <Route path="/FavoriteRes">
          <FavoriteRes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
