'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _storeJs = require('./store.js');

var _storeJs2 = _interopRequireDefault(_storeJs);

var _componentsHomeJs = require('/components/Home.js');

var _componentsHomeJs2 = _interopRequireDefault(_componentsHomeJs);

exports['default'] = _react2['default'].createElement(
	_reactRedux.Provider,
	{ store: _storeJs2['default'] },
	_react2['default'].createElement(_componentsHomeJs2['default'], null)
);
module.exports = exports['default'];