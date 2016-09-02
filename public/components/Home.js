'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginFormJs = require('./LoginForm.js');

var _LoginFormJs2 = _interopRequireDefault(_LoginFormJs);

require('/css/Home.less');

var Home = _react2['default'].createClass({
	displayName: 'Home',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ id: 'Home' },
			_react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'h1',
					null,
					'HOME'
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'LoginForm-container' },
				_react2['default'].createElement(_LoginFormJs2['default'], null)
			)
		);
	}
});

exports['default'] = Home;
module.exports = exports['default'];