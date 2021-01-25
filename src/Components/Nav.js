import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h2>Lambda Eats</h2>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
      </ul>
    </nav>
  );
}
