import React from 'react';
import { createRoot } from 'react-dom/client';  // ✅ new API


// React.createElement - Object - HTMLElement(render)
const heading = React.createElement("h1", {} , "namaste react")


// JSX
const jsxHeading = <h1>vansh from jsx</h1>  
console.log(jsxHeading);

const root = createRoot(document.getElementById("root"))
root.render(jsxHeading)