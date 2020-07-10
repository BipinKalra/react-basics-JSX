// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// The code above is essentially the same as
// const React = require("react");

// Create a React component
const App = () => {
  const buttonText = "Click Me!"

  return (
    <div>
      <label className="label" for="name">
        Enter Name
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        { buttonText }
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
