var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('NodeJS Web server is running at http://%s:%s', host, port);
});

var db = require(__dirname + "/lib/postgresql.js");

app.get("/data", function(req, res) {
	db.query("SELECT * FROM itstaff", function(err, result) {
		if(err) {
			return console.error("Error running query", err);
		}
		res.end(JSON.stringify(result.rows));
	});
});
