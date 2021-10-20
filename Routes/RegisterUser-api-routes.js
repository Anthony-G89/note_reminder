const db = require("../models");

module.exports = function (app) {
    // These routes are registering the user to the DB
    app.post("/api/registerUser", (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then((results) => {
            res.json(results)
        })
            .catch((err) => {
                console.error(err)
            })
    });

    app.get("/api/registerUser", (req, res) => {
        db.User.findAll({
            include: [db.Note]
        }).then((result) => {
            res.json(result)
        })
            .catch((err) => {
                console.error(err)
            })
    });

    app.get("/api/registerUser/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Note]
        }).then((result) => {
            res.json(result)
        })
            .catch((err) => {
                console.error(err)
            })
    });
}