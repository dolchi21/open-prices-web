'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Home.less');

var Home = _react2['default'].createClass({
	displayName: 'Home',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ id: 'Home' },
			'Home'
		);
	}
});

exports['default'] = Home;
module.exports = exports['default'];