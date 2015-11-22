var user = require('./../db/users');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./../db');

passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.studentno);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});



module.exports = function(router){
	router.route('/login')
		.post(
			passport.authenticate('local', { failureRedirect: '/#/login' }),
			function(req, res) {
				res.redirect('/user/#/feed');
			});

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

