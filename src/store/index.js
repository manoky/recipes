/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { makeRootReducer } from '../reducers';
import requests from './requests';

const middleware = [requests, thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({ collapsed: true, diff: true }));
}

const enhancer = compose(
  applyMiddleware(...middleware),
  persistState(['recipes', 'favorites']),
);

const store = createStore(makeRootReducer(), enhancer);

export default store;
