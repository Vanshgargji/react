import React from "react";
import { createRoot } from "react-dom/client"; // ✅ new API

// React Element using jsx
const h = (
<h1>react element example</h1>
);

// can also do this using simple function javascript technique
const Title = () => (
  <h1>
    this is from other variable
  </h1>
);

const number = 1000

// React functional component
const HeadingElement = () => (
  <div className="container">
  {h}
  <h3>{number}</h3>
  <Title/>
  <h1>react functional component </h1>
  </div>
)
// const HeadingElement = () => {
//   return <h1>react functional component</h1>
// }

const root = createRoot(document.getElementById("root"));
root.render(<HeadingElement/>);

