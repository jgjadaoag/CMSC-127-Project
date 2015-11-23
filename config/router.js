var users = require('./../db/users');
var db = require('./../db/postgresql');
var studentController = require('./../controllers/student.js');
var neutralController = require('./../controllers/neutral.js');


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

	router.get('/student/class/:portalcode/requirement/:requirementid', 
			require('connect-ensure-login').ensureLoggedIn(),
			studentController.viewRequirement);

	router.get('/student/unenroll/:portalcode',
			require('connect-ensure-login').ensureLoggedIn(),
			studentController.unenroll);

	router.route("/info")
		.get(neutralController.getInfo);


		return router;

}

