'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.login = login;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _configJs = require('./config.js');

function login(username, password) {

	return _axios2['default'].post(_configJs.baseURL + '/login/', {
		username: username, password: password
	});
}

exports['default'] = {
	login: login
};