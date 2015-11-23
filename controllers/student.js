const db = require(__dirname + '/../db/postgresql.js');

exports.joinClass = (req, res, next) => {
<<<<<<< HEAD
	function start() {
		if (req.user.isTeacher) {
			res.send({message: "you are not a student"});
		}
		db.query('SELECT * FROM class WHERE portal = $1', [req.params.portalcode], function(err, result) {
			if (err) {
				res.send({message: "error selecting class"});
			}
			if (!result.rows[0]) {
				res.send({message: "The class does not exist"});
			}
			checkAvailability();
		});
	}
	function checkAvailability() {
		db.query('SELECT * from class_list WHERE portal = $1 and studentemail = $2',
			[req.params.portalcode, req.user.email],
			function (err, result) {
				if (err) {
					res.send({message: "Unable to select from class list"});
				}
				if(result.rows.length === 1) {
					res.send({message: "You are already in the class"});
				}
				insertToClass();
		});
	}
	function insertToClass() {
		db.query('INSERT INTO class_list values($1, $2, false) RETURNING *', 
			[req.params.portalcode, req.user.email],
			(err, result) => {
				if (err) {
					res.send({message: "Unable to insert to class list"});
				}
				if(result.rows.length < 1) {
					res.send({message: "Unable to add to class"});
				}
				res.send({message: "You have successfully been added to the class"});
		});
	}
	start();
}

exports.viewRequirement = (req, res, next) => {
	function start() {
		//db.query('SELECT * FROM requirement WHERE
	}
}
