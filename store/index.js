import { createStore, applyMiddleware } from 'redux'
import {createWrapper} from 'next-redux-wrapper';

import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";



const bindMiddleware = middleware => {
  const arrMiddleware = [middleware];

  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    // arrMiddleware.push(createLogger());
    return composeWithDevTools(applyMiddleware(...arrMiddleware));
  }
  return applyMiddleware(...arrMiddleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, bindMiddleware(sagaMiddleware));
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  store.runSagaTask();

  return store;
}

export const wrapper = createWrapper(configureStore, {debug: true});
