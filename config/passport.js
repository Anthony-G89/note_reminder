const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.findone({
            where: {
                email: email
            }
        }).then(function (dbUser) {
            console.log({ dbUser });

            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect Email"
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect Password"
                });
            }
            return done(null, dbUser)
        });
    }
));