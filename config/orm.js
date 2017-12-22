var connection = require("./connection");

var orm = {
	selectAll: function(cb) {
		var queryString = "Select * FROM burgers;";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	insertOne: function(val, cb) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + val + "')";
		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			};
			cb(result);
		});
	},

	updateOne: function(id, cb) {
		var queryString = "UPDATE burgers SET devoured = true WHERE ?;";
		connection.query(queryString, [{ id: id }], function(err, result) {
			if (err) {
				throw err;
			};
			cb(result);
		});
	}
};

module.exports = orm;