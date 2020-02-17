const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views/index.html'));
    });

    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views/about.html'));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views/contact.html'));
    });


};

