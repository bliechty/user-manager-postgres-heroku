const express = require("express");
const path = require("path");
const { PORT } = require("./config");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const user = "bradyliechty";
const pass = "bliechty1234";

passport.use(new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        if (username !== user || password !== pass) {
            return done(null, false);
        } else {
            return done(null, true);
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());

app.use((req, res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});

app.use("/", routes);

app.post("/", passport.authenticate("local",
    {
        successRedirect: "/functionality",
        failureRedirect: "/",
        failureFlash: false
    }
));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});