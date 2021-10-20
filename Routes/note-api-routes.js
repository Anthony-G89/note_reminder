const isAuthenticated = require("../config/middleware/isAuthenticated");
const { query } = require("express");
const db = require("../models");


module.exports = function (app) {

    // These routes are for users notes
    app.get("/getNotes", (req, res) => {
        db.Note.findAll({}).then((dbNotes) => {
            res.json(dbNotes)
        })
    });

    app.get("/getNotes/:id", (req, res) => {
        db.Note.findOne({
            where: {
                id: req.params.id
            }
        }).then((dbNotes) => {
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


    app.get("/userDashbored", isAuthenticated, (req, res) => {
        res.render("/userDashbored")
    });

    //  These routes are INCLUDING my USER_DB
    app.get("/getNotes", (req, res) => {
        var query ={};
        if (req.query.User_id) {
            query.UserId = req.query.User_id;
          }
        db.Note.findAll({
            where: query,
            include: [db.User]
        }).then((result) => {
            res.json(result)
        })
            .catch((err) => {
                console.error(err)
            })
    });


    app.get("/getNotes/:id", (req, res) => {
        db.Note.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then((result) => {
            res.json(result)
        })
            .catch((err) => {
                console.error(err)
            })
    })

    
};