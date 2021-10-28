const isAuthenticated = require("../config/middleware/isAuthenticated");
const { query } = require("express");
const db = require("../models");
const req = require("express/lib/request");


module.exports = function (app) {

    // These routes are for users notes
    // app.get("/getNotes", (req, res) => {
    //     console.log(req)
    //     db.Note.findAll({
    //         // where: {
    //         //     id: req.user.UserId
    //         // }
    //     }).then((dbNotes) => {
    //         res.json(dbNotes)
    //     })
    //         .catch((err) => {
    //             console.error(err)
    //         })
    // });

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
        console.log(req.user);
        db.Note.create({
            UserId: req.user.id,
            title: req.body.title,
            body: req.body.body
        }).then(function (results) {
            // console.log(results)
            res.json(results);
        })
            .catch(function (err) {
                console.error(err);
                res.json(err);
            });
    });


    app.delete("/api/addingNote/:id", (req, res) => {
        // console.log(req.params.id)
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


    app.get("/logout" , (req, res) => {
        req.logout();
        res.json("You're now logged out")
    });

    //  These routes are INCLUDING my USER_DB
    app.get("/getNotes", (req, res) => {
        // console.log(req);
        db.Note.findAll({
            where: {
                UserId: req.user.id
            },
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