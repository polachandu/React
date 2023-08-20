import React  from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * <div id="parent">
 *  <div id="child">
 *  <h1>I'm an h1 tag</h1>
 *  <h2>I'm an h2 tag</h2>
 * </div>
 * </div>
 * 
 * parent is a ReactElement that converts into HTML(Where browser understands)
 */

// const parent = React.createElement("div",{id:"parent"},
//                 [React.createElement("div",
//                     {id:"child1"},
//                     [React.createElement("h1",{},"I'm a h1 tag"),
//                     React.createElement("h2",{},"I'm an h2 tag")]),
//                     React.createElement(
//                         "div",
//                         {id:"child2"},
//                         [React.createElement("h1",{},"I'm a h1 tag"),
//                         React.createElement("h2",{},"I'm an h2 tag")])
//                     ]);




// const heading = React.createElement("h1",{id:"heading"},"Hello World from REACT!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);