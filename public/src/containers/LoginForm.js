import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm.js';

import { login, logout } from '../modules/Auth.js';

function mapStateToProps(state){
	return state.auth;
}
function mapDispatchToProps(dispatch){
	return {
		onSubmit : function(username, password){
			dispatch( login(username, password) );
		},
		onLogout : function(){
			dispatch( logout() );
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
