const db = require(__dirname + '/../db/postgresql.js');

exports.joinClass = function (req, res, next) {
	function start() {
		if (req.user.isTeacher) {
			res.send({message: "you are not a student"});
			return;
		}
		db.query('SELECT * FROM class WHERE portal = $1', [req.params.portalcode], function(err, result) {
			if (err) {
				res.send({message: "error selecting class"});
					return;
			}
			if (!result.rows[0]) {
				res.send({message: "The class does not exist"});
					return;
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
					return;
				}
				if(result.rows.length === 1) {
					res.send({message: "You are already in the class"});
					return;
				}
				insertToClass();
		});
	}
	function insertToClass() {
		db.query('INSERT INTO class_list values($1, $2, false) RETURNING *', 
			[req.params.portalcode, req.user.email],
			function (err, result) {
				if (err) {
					res.send({message: "Unable to insert to class list"});
					return;
				}
				if(result.rows.length < 1) {
					res.send({message: "Unable to add to class"});
					return;
				}
				res.send({message: "You have successfully been added to the class"});
		});
	}

	start();
}

exports.viewRequirement = function (req, res, next) {
	function start() {
		db.query('SELECT * from class_list WHERE portal = $1 and studentemail = $2',
			[req.params.portalcode, req.user.email],
			function (err, result) {
				if (err) {
					res.send({message: "Unable to select from class list"});
					return;
				}
				if(result.rows.length !== 1) {
					res.send({message: "You are not a member of this class"});
					return;
				}
				getRequirement();
		});
	}
	function getRequirement() {
		db.query('SELECT * FROM requirement WHERE id = $1 and classportal = $2',
				[req.params.requirementid, req.params.portalcode],
				function (err, result) {

					if (err) {
						res.send({message: "Unable to select from requirement"});
					}
					
					if (result.rows.length === 0) {
						res.send({message: "Requirement not found"})
					}

					res.send(result.rows[0]);
				}
		);
	}

	start();
}

exports.unenroll = function (req, res, next) {
	function start() {
		db.query('SELECT * FROM class_list WHERE portal = $1 AND studentemail = $2',
			[req.params.portalcode, req.user.email],
			function (err, result) {
				if (err) {
					res.send({message: "Unable to select from class list"});
					return;
				}
				if(result.rows.length !== 1) {
					res.send({message: "You are not a member of this class"});
					return;
				}
				removeEnroll();
		});
	}

	function removeEnroll() {
		db.query('DELETE FROM class_list WHERE portal = $1 AND studentemail = $2',
			[req.params.portalcode, req.user.email],
			function (err, result) {
				if (err) {
					res.send({message: "Unable to delete from class list"});
					return;
				}
				res.send({message: "You have been successfully unenrolled from the class"});
		});
	}

	start();
}
