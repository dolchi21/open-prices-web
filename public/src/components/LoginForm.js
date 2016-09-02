import React from 'react';

import { login } from '/modules/Auth.js';

require('/css/LoginForm.less');

var LoginForm = React.createClass({
	getInitialState : function getInitialState(){
		return {}
	},
	render : function render(){
		return (
			<form id="LoginForm" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label className="col-sm-2 control-label">Username</label>
					<div className="col-sm-10">
						<input className="form-control" name="username" onChange={this.handleChange}/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Password</label>
					<div className="col-sm-10">
						<input className="form-control" name="password" onChange={this.handleChange}/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<button className="btn btn-default">
							Login
						</button>
					</div>
				</div>
			</form>
			);
	},
	handleSubmit : function handleSubmit(ev){
		ev.preventDefault();
		console.log(this.state)
		login(this.state.username, this.state.password)(function(){});
	},
	handleChange : function handleChange(ev){
		var name = ev.target.name;
		var value = ev.target.value;
		this.setState({
			[name] : value
		})
	}
});

export default LoginForm;