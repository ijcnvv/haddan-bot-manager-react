import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "reducers";
import rootSaga from "sagas";

const sagaMiddlware = createSagaMiddleware();
const reduxDevTools =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ && [
      window.__REDUX_DEVTOOLS_EXTENSION__()
    ]) ||
  [];

const middlewares = compose(applyMiddleware(sagaMiddlware), ...reduxDevTools);
const store = createStore(rootReducer, middlewares);

sagaMiddlware.run(rootSaga);

export default store;
