var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {},
    insertOne: function(tableInput, column, value, cb) {},
    updateOne: function(tableInput, objColVals, condition, cb) {}
}

module.exports = orm;