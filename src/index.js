import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { throttle } from "lodash";
import defaultLinks from "./defaultLinks";
import reducer from "./store/reducer";
import { loadState, saveState } from "./util";
const defaultState = defaultLinks;
localStorage.setItem("links", JSON.stringify(defaultState));

const persistedState = loadState();
const store = createStore(reducer, persistedState);
store.subscribe(
  throttle(() => {
    saveState({
      links: store.getState().links,
    });
  }, 1000)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
