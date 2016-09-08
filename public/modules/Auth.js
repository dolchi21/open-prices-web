'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = reducer;
exports.login = login;
exports.logout = logout;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

var _apiAuthJs = require('/api/auth.js');

var _apiAuthJs2 = _interopRequireDefault(_apiAuthJs);

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
var SAVE = 'AUTH/SAVE';

exports.SAVE = SAVE;

function reducer(state, action) {
	if (state === undefined) state = {};
	var type = action.type;
	var payload = action.payload;

	switch (type) {

		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				token: payload
			});

		case LOGOUT:
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

		return _apiAuthJs2['default'].login(username, password).then(function (response) {

			var token = response.data.data;

			return dispatch({
				type: LOGIN_SUCCESS,
				payload: token
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

function logout() {
	return {
		type: LOGOUT
	};
}