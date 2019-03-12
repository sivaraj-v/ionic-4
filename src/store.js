import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { indexReducer } from './reducer/index-reducer';
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
export const store = createStore(indexReducer, composeEnhancers(applyMiddleware(thunk)));
