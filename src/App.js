import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Restaurants from "./components/resturants";

function App() {
  <Router>
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/">
          <Restaurants />
        </Route>
        <Route path="/FavoriteRes">
          <FavoriteRes />
        </Route>
      </Switch>
    </div>
  </Router>;
}

export default App;
