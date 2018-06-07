var orm = require('../config/orm.js');

var planet = {
    all: function(cb) {
        orm.all("planets", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("planets", cols, vals, function(res) {
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