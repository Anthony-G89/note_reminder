// const res = require("express/lib/response");
const db = require("../models");

module.exports = function (app) {

    app.post("/api/addingNote", function (req, res) {
        console.log(req.body)
        res.json("message from the backEnd")

        
    //     db.Note.create({
    //         title: req.body.title,
    //         body: req.body.body
    //     }).then(function (results) {
    //         res.json(results)
    //     })
    //         .catch(function (err) {
    //             console.error(err);
    //             res.json(err);
    //         })
     })

};