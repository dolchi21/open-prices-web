import axios from 'axios';



export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';



export default function reducer(state = {}, action){
	return state;
}



export function login(username, password){
	
	return function(dispatch){
		
		return axios.post('/login', {
			username, password
		}).then(function(response){
			return dispatch({
				type : LOGIN_SUCCESS,
				payload : response.data
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
