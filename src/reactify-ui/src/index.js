import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

let myComponent = document.getElementById("tui");
if (myComponent !== null) {
  ReactDOM.render(<App />, myComponent);
}
// registerServiceWorker();
