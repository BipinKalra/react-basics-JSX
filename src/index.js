// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// The code above is essentially the same as
// const React = require("react");

// Create a React component
const App = () => {
  const buttonText = "Click Me!";
  // const buttonText = {
  //   text: "Click Me!",
  // };
  // This gives an error - javascript objects can't be reduced to text inside jsx

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
