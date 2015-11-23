const db = require('./../db/postgresql');

exports.getInfo = (req, res, next) => {

	if (req.user) {
		delete req.user.password;
	}
	res.send(req.user);
}

