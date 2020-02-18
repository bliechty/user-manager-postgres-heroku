const express = require("express");
const path = require("path");
const { PORT } = require("./config");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});