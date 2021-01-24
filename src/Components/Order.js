import React from "react";

export default function Order(props) {
  return (
    <div>
      <h1>Congrats! pizza is on its way!</h1>
      <h5>Order confirmed</h5>
      <p>{props.newOrder}</p>
    </div>
  );
}
