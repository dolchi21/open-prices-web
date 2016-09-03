import React from 'react';

import LoginForm from '../containers/LoginForm.js';

require('/css/Home.less');

var Home = React.createClass({
	render : function render(){
		return (
			<div id="Home">
				<div>
					<h1>HOME</h1>
				</div>
				<div>
					<a href="/login">login</a>
				</div>
			</div>
			);
	}
});

export default Home;
