import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import App from "./components/App";
import reducers from "./reducers";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const authenticated = localStorage.getItem("mywebtoken");
const store = createStore(
  reducers,
  { auth: { authenticated } },
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
