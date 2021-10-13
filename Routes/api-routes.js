// const res = require("express/lib/response");
const db = require("../models");
// import { Redirect } from "react-router-dom";

module.exports = function (app) {


    // These routes are registering the user to the DB
    app.post("/api/registerUser", (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            Password: req.body.Password
        }).then((results) => {
            res.json(results)
        })
            .catch((err) => {
                console.log(err)
            })
    });


    // These routes are for users notes
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
    });


    app.delete("/api/addingNote/:id", (req, res) => {
        console.log(req.params.id)
        db.Note.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results)
        })
            .catch(function (err) {
                res.json(err)
            })
    });


    app.put("/api/addingNote/:id", (req, res) => {
        db.Note.update({
            title: req.body.title,
            body: req.body.body
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results)
        })
            .catch(function (err) {
                res.json(err)
            })
    });

};