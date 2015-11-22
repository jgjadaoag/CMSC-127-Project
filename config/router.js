var user = require('./../db/users');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./../db');


module.exports = function(router){
	router.route('logout')
		.get(
			 function(req, res){
   				 req.logout();
   				 res.redirect('/');
  			});

	router.route("/info")
		.get(
			function(req, res) {
				res.send(req.user);
			});


		return router;

}

