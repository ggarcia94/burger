var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.insertOne("burger_name", req.body.burgerName, function(data) {
        res.status(200).end();
    });
});

router.put("/api/burgers", function(req, res) {
    burger.updateOne(req.body.id, function(data) {
        res.status(200).end();
    });
})


// Export routes for server.js to use.
module.exports = router;
