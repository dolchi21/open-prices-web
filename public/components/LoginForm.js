'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('/css/LoginForm.less');

var LoginForm = _react2['default'].createClass({
	displayName: 'LoginForm',

	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		var _this = this;

		if (this.props.token) {
			setTimeout(function () {
				window.location.href = '/members/';
			}, 1000);
		}
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
						'p',
						{ className: 'form-control-static' },
						this.props.token
					)
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-offset-2 col-sm-10' },
					_react2['default'].createElement(
						'div',
						{ className: 'btn-group' },
						_react2['default'].createElement(
							'button',
							{ className: 'btn btn-default' },
							(function () {
								if (_this.props.token) {
									return _react2['default'].createElement(
										'span',
										null,
										_react2['default'].createElement('i', { className: 'fa fa-spinner fa-pulse' }),
										' Logging in...'
									);
								}
								return _react2['default'].createElement(
									'span',
									null,
									'Login'
								);
							})()
						),
						_react2['default'].createElement(
							'button',
							{ className: 'btn btn-default', type: 'reset', onClick: this.handleLogout },
							'Logout'
						)
					)
				)
			)
		);
	},
	handleSubmit: function handleSubmit(ev) {
		ev.preventDefault();
		this.props.onSubmit(this.state.username, this.state.password);
	},
	handleLogout: function handleLogout(ev) {
		ev.preventDefault();
		this.props.onLogout();
	},
	handleChange: function handleChange(ev) {
		var name = ev.target.name;
		var value = ev.target.value;
		this.setState(_defineProperty({}, name, value));
	}
});

LoginForm.defaultProps = {
	onSubmit: function onSubmit() {
		console.warn('Submit not implemented.');
	},
	onLogout: function onLogout() {
		console.warn('Logout not implemented.');
	}
};

exports['default'] = LoginForm;
module.exports = exports['default'];