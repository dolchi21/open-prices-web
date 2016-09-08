import axios from 'axios';
import store from 'store';


import API from '/api/auth.js';	


export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';
export const LOGOUT = 'AUTH/LOGOUT';

export const RESTORE = 'AUTH/RESTORE';
export const SAVE = 'AUTH/SAVE';


export default function reducer(state = {}, action){

	var { type, payload } = action;

	switch (type) {

		case LOGIN_SUCCESS:
		return Object.assign({}, state, {
			token : payload
		});

		case LOGOUT:
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
		
		return API.login(username, password).then(function(response){

			var token = response.data.data;

			return dispatch({
				type : LOGIN_SUCCESS,
				payload : token
			});

		}).catch(function(err){
			
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
export function logout(){
	return {
		type : LOGOUT
	}
}
