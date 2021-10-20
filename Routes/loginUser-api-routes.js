const passport = require("../config/passport");
const db = require("../models");
module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    

};