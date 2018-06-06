var orm = require('../config/orm.js');

var planet = {
    selectAll: function(cb) {
        orm.selectAll("planets", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("planets", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("planets", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = planet;