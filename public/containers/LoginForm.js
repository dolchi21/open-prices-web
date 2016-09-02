'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactRedux = require('react-redux');

var _componentsLoginFormJs = require('../components/LoginForm.js');

var _componentsLoginFormJs2 = _interopRequireDefault(_componentsLoginFormJs);

var _modulesAuthJs = require('../modules/Auth.js');

function mapStateToProps(state) {
	return state.auth;
}
function mapDispatchToProps(dispatch) {
	return {
		onSubmit: function onSubmit(username, password) {
			dispatch((0, _modulesAuthJs.login)(username, password));
		},
		onLogout: function onLogout() {
			dispatch((0, _modulesAuthJs.logout)());
		}
	};
}

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsLoginFormJs2['default']);
module.exports = exports['default'];