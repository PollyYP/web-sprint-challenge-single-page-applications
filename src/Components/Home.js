import React from "react";

export default function Home() {
  return (
    <div>
      <nav>
        <h2>Lambda Eats</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Help</li>
        </ul>
      </nav>
      <div className="btn-container">
        <button className="btn">Pizza?</button>
      </div>
    </div>
  );
}
