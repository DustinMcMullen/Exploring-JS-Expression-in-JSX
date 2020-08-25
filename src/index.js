import React from "react";
import ReactDOM from "react-dom";

const fName = "Dustin";
const lName = "McMullen";
const faveFood = "Pizza";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>your favorite food is {faveFood}.</p>
  </div>,
  document.getElementById("root")
);
