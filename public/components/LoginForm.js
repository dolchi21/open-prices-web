'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modulesAuthJs = require('/modules/Auth.js');

require('/css/LoginForm.less');

var LoginForm = _react2['default'].createClass({
	displayName: 'LoginForm',

	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		return _react2['default'].createElement(
			'form',
			{ id: 'LoginForm', className: 'form-horizontal', onSubmit: this.handleSubmit },
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ className: 'col-sm-2 control-label' },
					'Username'
				),
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-10' },
					_react2['default'].createElement('input', { className: 'form-control', name: 'username', onChange: this.handleChange })
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ className: 'col-sm-2 control-label' },
					'Password'
				),
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-10' },
					_react2['default'].createElement('input', { className: 'form-control', name: 'password', onChange: this.handleChange })
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-offset-2 col-sm-10' },
					_react2['default'].createElement(
						'button',
						{ className: 'btn btn-default' },
						'Login'
					)
				)
			)
		);
	},
	handleSubmit: function handleSubmit(ev) {
		ev.preventDefault();
		console.log(this.state);
		(0, _modulesAuthJs.login)(this.state.username, this.state.password)(function () {});
	},
	handleChange: function handleChange(ev) {
		var name = ev.target.name;
		var value = ev.target.value;
		this.setState(_defineProperty({}, name, value));
	}
});

exports['default'] = LoginForm;
module.exports = exports['default'];