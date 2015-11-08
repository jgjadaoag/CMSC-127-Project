var pg = require("./postgresql.js");
var records
pg.query("SELECT * FROM student", function(err, result) {
	if(err) {
		return console.error("Error running query", err);
	}
	records = result.rows;

});
/*
var records = [
    { id: 1, studentno: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, studentno: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];
*/

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var user;
    pg.query("SELECT * FROM student where studentno='" + id + "'", function(err, result) {
	    if(err) {
		    return console.error("Error running query", err);
	    }
	    if (result.rows[0]) {
	      cb(null, result.rows[0]);
	    } else {
	      cb(new Error('User ' + id + ' does not exist'));
	    }
    });
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.studentno === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
