import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'



import Home from './routes/Home.jsx';
import Store from './routes/Store.jsx';


var app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Home}/>
		<Route path='store' component={Store}/>
		<Route path='/store' component={Store}/>
	</Router>
	, document.getElementById('app'));