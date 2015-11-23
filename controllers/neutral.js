const db = require('./../db/postgresql');

exports.getInfo = (req, res, next) => {
	if (req.user) {
		delete req.user.password;
	}

	res.send(req.user);
}

exports.signUp = (req, res, next) => {
	function start() {
		db.query('SELECT * FROM person where email = $1',
				[req.body.email],
				function(err, result) {
					if (err) {
						res.send({message: "Error selecting users"});
						next(err);
						return;
					}
					if (result.rows.length === 1) {
						res.send({message: "Email is already in use"});
						return;
					}
					if(req.body.isTeacher === 'true')
						teacherSignUp(req, res, next);
					else 
						studentSignUp(req, res, next);
				}
			);
	}

	start();
}

function teacherSignUp (req, res, next) {
	function start() {
		db.query('INSERT INTO teacher VALUES($1, $2, $3, $4, $5, $6, $7)',
				[req.body.email, req.body.fname, req.body.mname, req.body.lname, req.body.bday, req.body.password, req.body.empno],
				(err, result) => {
					if (err) {
						res.send({message: "Error inserting to teachers"});
						return;
					}
					res.redirect("/");
					
				}
			);
	}

	start();
}

function studentSignUp (req, res, next) {
	console.log(req.body);
	function start() {
		db.query('INSERT INTO student VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
				[req.body.email, req.body.fname, req.body.mname, req.body.lname, req.body.bday, req.body.password, req.body.stdno, req.body.degree, req.body.college],
				(err, result) => {
					if (err) {
						res.send({message: "Error inserting to students"});
						return;
					}
					res.redirect("/");
				}
			);
	}

	start();
}

exports.viewFiles = (req, res, next) => {
}

exports.viewClass = (req, res, next) => {
	function start() {
		db.query('SELECT * FROM class WHERE portal = $1',
				[req.params.portalcode],
				(err, result) => {
					if (err) {
						res.send({message: "Error selecting class"});
						return;
					}
					if(result.rows.length !== 1) {
						res.send({message: "Class does not exist or you don't have permission to view this class"});
						return;
					}
					checkPermission(result.rows[0]);
				}
			);
	}

	function checkPermission(classDetail) {
		if (req.user.isTeacher) {
			if (req.user.email !== classDetail.teacheremail) {
				res.send({message: "Class does not exist or you don't have permission to view this class"});
				return;
			}
			res.send(classDetail);
		} else {
			db.query('SELECT * FROM class_list WHERE portal = $1 and studentemail = $2 and isenrolled = true',
					[classDetail.portal, req.user.email],
					(err, result) => {
						if (err) {
							res.send({message: "Error in selecting class list"});
							return;
						}
						if (result.rows.length !== 1) {
							res.send({message: "Class does not exist or you don't have permission to view this class"});
							return;
						}
						res.send(classDetail);
			});
		}
	}

	start();
}
