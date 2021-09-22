import { createStore, applyMiddleware } from 'redux'
import {createWrapper} from 'next-redux-wrapper';

import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'MyCart',
  storage: storage,
  blacklist: ['login']
};

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
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, bindMiddleware(sagaMiddleware));

  store.__persistor = persistStore(store); // Nasty hack

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  store.runSagaTask();

  return store;
}

export const wrapper = createWrapper(configureStore, {debug: true});
