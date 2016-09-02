import React from 'react';


require('/css/LoginForm.less');


var LoginForm = React.createClass({
	getInitialState : function getInitialState(){
		return {}
	},
	render : function render(){
		if (this.props.token) {
			setTimeout(function(){
				window.location.href = '/members/';
			}, 1000);
		}
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
						<p className="form-control-static">{this.props.token}</p>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						
						<div className="btn-group">
							<button className="btn btn-default">
								{()=>{
									if (this.props.token) {
										return <span>Logging in...</span>
									}
									return <span>Login</span>
								}()}
							</button>
							<button className="btn btn-default" type="reset" onClick={this.handleLogout}>
								Logout
							</button>
						</div>

					</div>
				</div>
			</form>
			);
	},
	handleSubmit : function handleSubmit(ev){
		ev.preventDefault();
		this.props.onSubmit(this.state.username, this.state.password);
	},
	handleLogout : function handleLogout(ev){
		ev.preventDefault();
		this.props.onLogout();
	},
	handleChange : function handleChange(ev){
		var name = ev.target.name;
		var value = ev.target.value;
		this.setState({
			[name] : value
		});
	}
});

LoginForm.defaultProps = {
	onSubmit : function onSubmit(){ console.warn('Submit not implemented.'); },
	onLogout : function onLogout(){ console.warn('Logout not implemented.'); }
}

export default LoginForm;
