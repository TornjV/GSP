import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import makeRootReducer from './makeRootReducer';

export default (initialState = {}) => {
  const middleware = [
    thunkMiddleware,
    promiseMiddleware,
  ];

  const store = createStore(
    makeRootReducer(initialState),
    initialState,
    compose(
      applyMiddleware(...middleware),
      __DEV__ && window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  );

  if (module.hot) {
    module.hot.accept('./makeRootReducer', () => {
      const reducers = require('./makeRootReducer').default;
    });
  }

  return store;
};
