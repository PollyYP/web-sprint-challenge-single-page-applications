import React, { useState } from "react";
import Home from "./Home";
import Form from "./Form";
import Order from "./Order";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [newOrder, setNewOrder] = useState([]);

  return (
    <Router>
      <div>
        <Switch>
          <Home exact path="/" />

          <Route path="/pizza">
            <Form setNewOrder={setNewOrder} />
          </Route>

          <Route path="/completedOrder">
            <Order newOrder={newOrder} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
