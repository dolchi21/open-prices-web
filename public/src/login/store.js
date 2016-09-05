import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import Checkpoint from '/enhancers/checkpoint.js';

import authReducer, { restore } from '/modules/Auth.js';

var reducers = combineReducers({
	auth : authReducer
});

var checkpoint = Checkpoint({
	key : window.location.pathname
});
var middlewares = applyMiddleware(checkpoint, thunk, createLogger());

var store = createStore(reducers, compose(
	middlewares,
	window.devToolsExtension ? window.devToolsExtension() : f => f
	));

export default store;
