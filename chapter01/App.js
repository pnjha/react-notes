// const React = require("react");
// const ReactDOM = require("react-dom");

// for this to work we need to specify type as module.
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "hello world from react"); // {} adds attritbutes to a element

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

// root.render(heading);

/**
 *
 * <div id="level0">
 *  <div id="level1_1">
 *    <h1>level2</h1>
 *    <h1>level3</h1>
 *  </div>
 *  <div id="level1_2">
 *    <h1>level2</h1>
 *    <h1>level3</h1>
 *  </div>
 * </div>
 */

const level2 = React.createElement("h1", {}, "level2");
const level3 = React.createElement("h1", {}, "level3");
const level1_1 = React.createElement("div", { id: "level1_1" }, [level2, level3]);
const level1_2 = React.createElement("div", { id: "level1_2" }, [level2, level3]);
const level0 = React.createElement("div", { id: "level0" }, [level1_1, level1_2]);

root.render(level0);
