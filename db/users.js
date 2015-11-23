'use strict';

var pg = require("./postgresql.js");
var records
pg.query("SELECT * FROM person", function(err, result) {
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
    pg.query("SELECT * FROM person where email='" + id + "'", function(err, result) {
	    if(err) {
		    return console.error("Error running query", err);
	    }
	    if (result.rows[0]) {
		    setRole(id, cb);
	    } else {
	      cb(new Error('User ' + id + ' does not exist'));
	    }
    });
  });
}

function setRole (id, cb) {
  process.nextTick(function() {
    var user;
    pg.query("SELECT * FROM teacher where email='" + id + "'", function(err, result) {
	    if(err) {
		    return console.error("Error running query", err);
	    }
	    if (result.rows[0]) {
		result.rows[0].isTeacher = true;
	      cb(null, result.rows[0]);
	    } else {
		    setStudent(id, cb);
	    }
    });
  });
}

function setStudent (id, cb) {
  process.nextTick(function() {
    var user;
    pg.query("SELECT * FROM student where email='" + id + "'", function(err, result) {
	    if(err) {
		    return console.error("Error running query", err);
	    }
	    if (result.rows[0]) {
		result.rows[0].isTeacher = false;
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
      if (record.email === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}

