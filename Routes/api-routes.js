// const res = require("express/lib/response");
const db = require("../models");

module.exports = function (app) {

    app.get("/getNotes", (req, res) => {
        db.Note.findAll({}).then((dbNotes) => {
            res.json(dbNotes)
        })
    });

    app.post("/api/addingNote", (req, res) => {
        db.Note.create({
            title: req.body.title,
            body: req.body.body
        }).then(function (results) {
            res.json(results);
        })
            .catch(function (err) {
                console.error(err);
                res.json(err);
            });
    })

};