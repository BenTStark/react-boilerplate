import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./app.view";
import { history } from "./helpers/helpers";

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById("root")
);
//registerServiceWorker();
