var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next){

	var { username, password } = req.body;

	var token = username + '.' + password;

	res.json({
		meta : 'Access token',
		data : token,
		errors : []
	});

});

module.exports = router