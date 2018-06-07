var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var planet = require("../models/planet.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  planet.all(function(data) {
    var hbsObject = {
      planets: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
  
router.post("/api/planets", function(req, res) {
  planet.create("planet_name", req.body.name, function(result) {
    res.json({ id: result.insertId });
  });
});
  
router.put("/api/planets/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  planet.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//EXPORTING FOR SERVER.JS
module.exports = router;