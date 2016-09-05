'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _enhancersCheckpointJs = require('/enhancers/checkpoint.js');

var _enhancersCheckpointJs2 = _interopRequireDefault(_enhancersCheckpointJs);

var _modulesAuthJs = require('/modules/Auth.js');

var _modulesAuthJs2 = _interopRequireDefault(_modulesAuthJs);

var reducers = (0, _redux.combineReducers)({
	auth: _modulesAuthJs2['default']
});

var checkpoint = (0, _enhancersCheckpointJs2['default'])({
	key: window.location.pathname
});
var middlewares = (0, _redux.applyMiddleware)(checkpoint, _reduxThunk2['default'], (0, _reduxLogger2['default'])());

var store = (0, _redux.createStore)(reducers, (0, _redux.compose)(middlewares, window.devToolsExtension ? window.devToolsExtension() : function (f) {
	return f;
}));

exports['default'] = store;
module.exports = exports['default'];