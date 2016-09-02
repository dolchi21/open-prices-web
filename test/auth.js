var assert = require('assert');

describe('AuthModule', function(){
	
	var Auth = require('../public/modules/Auth');
	var reducer = Auth.default;

	it('should remove token.', function(){
		
		var state = {
			token : 'qwe.asd.zxc'
		}
		
		var action = Auth.logout();
		
		var new_state = reducer(state, action);
		
		assert.equal(new_state.token, null, 'Token is not null.')

	});

});