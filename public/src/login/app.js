import React from 'react';
import { Provider } from 'react-redux';

import Store from './store.js';

import Home from '/components/Home.js';

export default (
	<Provider store={Store}>
		<Home/>
	</Provider>
	);
