'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsHomeJs = require('./components/Home.js');

var _componentsHomeJs2 = _interopRequireDefault(_componentsHomeJs);

var main = {
	Home: _react2['default'].createElement(_componentsHomeJs2['default'], null),
	ReactDOM: _reactDom2['default'],
	React: _react2['default']
};

exports['default'] = main;
module.exports = exports['default'];