import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import CommonState from "./context/common/commonState";
import store from "./store";

import * as serviceWorker from "./serviceWorker";
import "materialize-css/sass/materialize.scss";
import "./assets/styles/index.scss";

const appElement = (
  <Provider store={store}>
    <CommonState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CommonState>
  </Provider>
);

ReactDOM.render(appElement, document.getElementById("root"));

serviceWorker.register();
