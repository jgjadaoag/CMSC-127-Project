var pg = require("pg");
var dbMeta = {
	"user": "cacai",
	"pass": "ganda",
	"db": "classroom"
};
var conString = "postgres://" + dbMeta.user + ":" + dbMeta.pass + "@localhost/" + dbMeta.db;

var client = new pg.Client(conString);
client.connect(function(err) {
	if(err) {
		return console.error('coud not connect to postgres', err);
	}
});

module.exports = client;
