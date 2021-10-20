const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
const passport = require("./config/passport");
const session = require("express-session");
const compression = require('compression');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(express.static("public"));
app.use(session({ secret: "unagi", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require("./Routes/note-api-routes")(app);
require("./Routes/loginUser-api-routes")(app);
require("./Routes/RegisterUser-api-routes")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});