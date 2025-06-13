import React from "react"
import ReactDOM from "react-dom/client"


// const heading = React.createElement(
//   "h1" , {id: "heading"} , "Hello world from React"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//    <div id="parent">
//   <div id="child1">
//     <h1>i am h1</h1>
//     <h2>i am h1</h2>
//   </div>
//   <div id="child2">
//     <h1>i am h1</h1>
//     <h2>i am h1</h2>
//   </div>
//  </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "i am h1"),
    React.createElement("h2", { key: "h2-1" }, "i am h2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "i am h1"),
    React.createElement("h2", { key: "h2-2" }, "i am h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// heading is an object
// when root.render is used it extract the h1 tag from the object and then render it in the root
