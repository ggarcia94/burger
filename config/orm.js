// Import MySQL connection.
var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES ('?')";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, state, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ??"

    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;