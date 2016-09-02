'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = reducer;
exports.login = login;
exports.restore = restore;
exports.logout = logout;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

var LOGIN = 'AUTH/LOGIN';
exports.LOGIN = LOGIN;
var LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGIN_ERROR = 'AUTH/LOGIN_ERROR';
exports.LOGIN_ERROR = LOGIN_ERROR;
var LOGOUT = 'AUTH/LOGOUT';

exports.LOGOUT = LOGOUT;
var RESTORE = 'AUTH/RESTORE';

exports.RESTORE = RESTORE;
var API = {
	LOGIN: '/api/login/'
};

exports.API = API;

function reducer(state, action) {
	if (state === undefined) state = {};
	var type = action.type;
	var payload = action.payload;

	switch (type) {

		case RESTORE:
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				token: payload
			});

		case LOGOUT:
			removeToken();
		case LOGIN_ERROR:
			return Object.assign({}, state, {
				token: null
			});

		default:
			return state;

	}
}

function login(username, password) {

	return function (dispatch) {

		return _axios2['default'].post(API.LOGIN || '/api/login/', {
			username: username, password: password
		}).then(function (response) {

			var token = response.data.token;

			storeToken(token);

			return dispatch({
				type: LOGIN_SUCCESS,
				payload: token
			});
		})['catch'](function (err) {

			storeToken('err.new.token');
			return dispatch({
				type: LOGIN_SUCCESS,
				payload: 'err.new.token'
			});

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

function restore() {
	var token = getToken();
	return {
		type: RESTORE,
		payload: token
	};
}

function logout() {
	return {
		type: LOGOUT
	};
}

function storeToken(token) {
	var AUTH = Object.assign({ token: token }, _store2['default'].get('module.AUTH'));
	_store2['default'].set('AUTH', AUTH);
	return token;
}
function getToken() {
	var AUTH = _store2['default'].get('AUTH') || {};
	return AUTH.token;
}
function removeToken() {
	return storeToken(null);
}