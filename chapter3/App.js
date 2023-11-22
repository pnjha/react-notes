import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "hello world from react");

const headingJsx = (
  <h1 className="heading" tabIndex="10">
    {" "}
    hello from jsx
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingJsx);

// both heading and headingJsx objects are same wrt the browser
// parcel via babel is converting the jsx object to proper js object aka transpiling
