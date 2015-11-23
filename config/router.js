var user = require('./../db/users');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./../db');



module.exports = function(router){
	router.get('/login', function (req, res) {res.redirect('/#/login')});
	router.route('/logout')
		.get(
			 function(req, res){
   				 req.logout();
   				 res.redirect('/');
  			});

	router.get('/student/joinclass/:portalcode', 
			require('connect-ensure-login').ensureLoggedIn(),
			studentController.joinClass);
	router.get('/class/:portalcode/requirement/:requirementid', 
			require('connect-ensure-login').ensureLoggedIn(),
			studentController.viewRequirement);
	router.route("/info")
		.get(
			function(req, res) {
				res.send(req.user);
			});


		return router;

}

