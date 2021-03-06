import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import * as serviceWorker from "./serviceWorker";
import "materialize-css/sass/materialize.scss";
import "./assets/styles/index.scss";

const appElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(appElement, document.getElementById("root"));

serviceWorker.register();
