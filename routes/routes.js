const express = require("express");
const app = express.Router();
const db = require("../repositories/userRepository");

app.get("/userList", db.displayAllUsers);

module.exports = app;