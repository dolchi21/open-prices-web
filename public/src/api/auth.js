import axios from 'axios';

import { baseURL } from './config.js';

export function login(username, password){
	
	return axios.post(baseURL + '/login/', {
		username, password
	});

}

export default {
	login
}
