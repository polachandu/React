import React from "react";
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

//-------------------------------------------------------------------------------------------------
const number=10000;
const heading = React.createElement("h1", { id: "heading" }, "Hey Chandu");

const elem = <span>Hey </span>;

  

//React Functional Component

const HeadingComponent = () => (
  <div id ="container">
    <h2>{number}</h2>
  <h1>React Functional Component</h1>
  {title}
  </div>
);

const title = (
  <h1 className="head" tabIndex="5" id="heading">
   {elem}
     Chandu by JSX
     </h1>
 );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); 
// This is the syntax to render the React Componenet(Functional Component)
// root.render(title)
// This is the syntax to render the React object
