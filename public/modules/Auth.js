'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = reducer;
exports.login = login;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var LOGIN = 'AUTH/LOGIN';
exports.LOGIN = LOGIN;
var LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGIN_ERROR = 'AUTH/LOGIN_ERROR';

exports.LOGIN_ERROR = LOGIN_ERROR;

function reducer(state, action) {
	if (state === undefined) state = {};

	return state;
}

function login(username, password) {

	return function (dispatch) {

		return _axios2['default'].post('/login', {
			username: username, password: password
		}).then(function (response) {
			return dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data
			});
		})['catch'](function (err) {
			return dispatch({
				type: LOGIN_ERROR,
				payload: err
			});
		});

		dispatch({
			type: LOGIN
		});
	};
}