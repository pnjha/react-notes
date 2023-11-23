import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "headingreact" }, "hello world from react");

const testHeadingElement = (
  <h1 className="headingjsx" tabIndex="10">
    hello from test jsx element
  </h1>
);

// this is react element
const HeadingElement = (
  <div>
    <h1 className="headingjsx" tabIndex="10">
      hello from jsx element
    </h1>
    {testHeadingElement}
  </div>
);

// this is react  component
const HeadingJsx = () => (
  <h1 className="headingjsx" tabIndex="10">
    hello from jsx component
  </h1>
);

const number = 1000000;

// react component
// two types of components: class based(old method) and functional
// component composition
const HeadingComponent = () => (
  <div id="parent">
    <h1 className="funcHeading" tabIndex="9">
      hello react jsx functional composed component
    </h1>
    <HeadingJsx />
    {HeadingJsx()}
    {HeadingElement}
    {heading}
    <h2>{number}</h2>
    <h2>{"{ a: 1 }"}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(HeadingComponent());

// both heading and headingJsx objects are same wrt the browser
// parcel via babel is converting the jsx object to proper js object aka transpiling
