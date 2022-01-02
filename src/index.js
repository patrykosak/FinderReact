import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <BrowserRouter>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
