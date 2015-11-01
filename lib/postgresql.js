var pg = require("pg");
var dbMeta = {
	"user": "joseph",
	"pass": "",
	"db": "testDB"
};
var conString = "postgres://" + dbMeta.user + ":" + dbMeta.pass + "@localhost/" + dbMeta.db;

var client = new pg.Client(conString);
client.connect(function(err) {
	if(err) {
		return console.error('coud not connect to postgres', err);
	}
	client.query("SELECT * FROM staff", function(err, result) {
		if(err) {
			return console.error("Error running query", err);
		}
		console.log(result.rows);

	});
});

module.exports = client;
