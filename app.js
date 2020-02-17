const express = require("express");
const path = require("path");
const { PORT } = require("./config");
const db = require("./book");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/books", db.getBooks);
app.get("/createBook", (req, res) => {
    res.render("index");
});
app.post("/createBook", db.createBook);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});