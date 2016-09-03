import React from 'react';
import { Provider } from 'react-redux';

import Store from './store.js';

import LoginForm from '/containers/LoginForm.js';

export default (
	<Provider store={Store}>
		<LoginForm/>
	</Provider>
	);
