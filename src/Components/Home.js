import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <h2>Lambda Eats</h2>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Help</li>
        </ul>
      </nav>
      <div>
        <h1 className="homepage">
          Your favorite foods, delivered while coding
        </h1>
        <div className="center">
          <Link to="/pizza">
            <button className="btn">Pizza?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
