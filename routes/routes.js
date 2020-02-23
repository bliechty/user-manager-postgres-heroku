const express = require("express");
const app = express.Router();
const db = require("../repositories/userRepository");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/userList", db.displayAllUsers);

app.post("/userList", db.userListPost);

app.get("/createUser", (req, res) => {
    res.render("createUser");
});

app.post("/createUser", db.createUser);

app.get("/functionality", (req, res) => {
    res.render("functionality");
});

app.get("/deleteUser/:userId", db.deleteUser);

module.exports = app;