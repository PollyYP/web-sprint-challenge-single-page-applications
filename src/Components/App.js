import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Form from "./Form";
import Order from "./Order";
import Help from "./Help";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [newOrder, setNewOrder] = useState([]);

  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Home exact path="/" />

          <Route path="/pizza">
            <Form setNewOrder={setNewOrder} newOrder={newOrder} />
          </Route>

          <Route path="/completedOrder">
            <Order newOrder={newOrder} />
          </Route>

          <Route path="/help" component={Help} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
