const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./Routes/note-api-routes")(app);
require("./Routes/RegisterUser-api-routes")(app);
require("./Routes/loginUser-api-routes")(app);
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});