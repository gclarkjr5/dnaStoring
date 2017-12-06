import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        logger
      )
    )
  )
}