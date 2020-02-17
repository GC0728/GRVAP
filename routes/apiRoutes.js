var db = require("./models");

module.exports = function(app) {
    app.post("/api/contact", function(req, res) {
        console.log("requestbody", req.body);
        db.Post.create(req.body).then(function(dbPost) {
            console.log(doPost);
            res.json(dbPost);
        });
    });
};