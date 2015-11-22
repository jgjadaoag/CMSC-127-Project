var users = require('./../db/users');
var db = require('./../db/postgresql');
var studentController = require('./../controllers/student.js');
var neutralController = require('./../controllers/neutral.js');


module.exports = function(router){
	router.route('/logout')
		.get(
			 function(req, res){
   				 req.logout();
   				 res.redirect('/');
  			});

	router.get('/student/joinclass/:portalcode', studentController.joinClass);
	router.route("/info")
		.get(neutralController.getInfo);


		return router;

}

