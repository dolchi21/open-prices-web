import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import authReducer, { restore } from '/modules/Auth.js';

var reducers = combineReducers({
	auth : authReducer
});

var store = createStore(reducers, applyMiddleware(thunk, createLogger()));

store.dispatch(restore());

export default store;