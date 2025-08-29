import React from "react";
import ReactDom  from "react-dom/client";
import App from "./App";
import "./index.css"

// in New version of React, Use createRoom Function.
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);