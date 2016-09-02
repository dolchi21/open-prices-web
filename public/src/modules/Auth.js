import axios from 'axios';
import store from 'store';


export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';
export const LOGOUT = 'AUTH/LOGOUT';

export const RESTORE = 'AUTH/RESTORE';


export var API = {
	LOGIN : '/api/login/'
}


export default function reducer(state = {}, action){

	var { type, payload } = action;

	switch (type) {

		case RESTORE:
		case LOGIN_SUCCESS:
		return Object.assign({}, state, {
			token : payload
		});

		case LOGOUT:
		removeToken();
		case LOGIN_ERROR:
		return Object.assign({}, state, {
			token : null
		});
		
		default:
		return state;

	}

}



export function login(username, password){
	
	return function(dispatch){
		
		return axios.post(API.LOGIN || '/api/login/', {
			username, password
		}).then(function(response){

			var token = response.data.token;

			storeToken(token);

			return dispatch({
				type : LOGIN_SUCCESS,
				payload : token
			});

		}).catch(function(err){

			storeToken('err.new.token');
			return dispatch({
				type : LOGIN_SUCCESS,
				payload : 'err.new.token'
			});

			return dispatch({
				type : LOGIN_ERROR,
				payload : err
			});

		});

		dispatch({
			type : LOGIN
		});

	}

}
export function restore(){
	var token = getToken();
	return {
		type : RESTORE,
		payload : token
	}
}
export function logout(){
	return {
		type : LOGOUT
	}
}

function storeToken(token){
	var AUTH = Object.assign({ token }, store.get('module.AUTH'));
	store.set('AUTH', AUTH);
	return token;
}
function getToken(){
	var AUTH = store.get('AUTH') || {};
	return AUTH.token;
}
function removeToken(){
	return storeToken(null);
}