import React from "react";
import ReactDom from "react-dom";
import Home from "./components/home";

ReactDom.hydrate(
  <Home />,
  document.querySelector("#root"),
);
