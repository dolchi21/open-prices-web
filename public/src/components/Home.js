import React from 'react';

import LoginForm from './LoginForm.js';

require('/css/Home.less');

var Home = React.createClass({
	render : function render(){
		return (
			<div id="Home">
				<div>
					<h1>HOME</h1>
				</div>
				<div className="LoginForm-container">
					<LoginForm/>
				</div>
			</div>
			);
	}
});

export default Home;
