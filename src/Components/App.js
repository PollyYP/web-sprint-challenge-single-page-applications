import React from "react";
import Home from "./Home";
import Form from "./Form";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Home exact path="/" />
          <Route path="/pizza" component={Form} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
