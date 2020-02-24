const { pool } = require('../config');

const createUser = (req, res) => {
    const body = req.body;
    pool.query('insert into users (first, last, age, emailaddress) values ($1, $2, $3, $4)', [body["first-name"], body["last-name"], body.age, body["email-address"]], (e, r) => {
        if (e) {
            throw e;
        } else {
            res.redirect("/userList");
        }
    });
};

const displayAllUsers = (req, res) => {
    const cookies = checkForCategoryAndOrder(req.cookies);
    const category = cookies.category;
    const order = cookies.order;
    pool.query(categoryAndOrder(category, order), (e, r) => {
        if (e) {
            throw e;
        } else {
            res.render("usersList", {users: r.rows, category, order});
        }
    });
};

const userListPost = (req, res) => {
    const searchInput = req.body["search-input"];
    let category;
    let order;
    if (searchInput === undefined) {
        category = req.body["user-category"];
        order = req.body["user-order"];
        res.cookie("category", category);
        res.cookie("order", order);
        pool.query(categoryAndOrder(category, order), (e, r) => {
            res.render("usersList", {users: r.rows, category, order});
        });
    } else {
        const cookies = checkForCategoryAndOrder(req.cookies);
        category = cookies.category;
        order = cookies.order;
        if (!/\\/.test(searchInput) &&
            !/\|/.test(searchInput) &&
            !/\+/.test(searchInput) &&
            !/\?/.test(searchInput) &&
            searchInput !== "") {
            let searchCommand;
            if (/^\d+$/.test(searchInput)) {
                searchCommand = "select * from users where age = $1";
            } else {
                searchCommand = "select * from users where LOWER(first) = LOWER($1) or LOWER(last) = LOWER($1) or LOWER(emailaddress) = LOWER($1)";
            }
            pool.query(searchCommand, [searchInput], (e, r) => {
                if (e) {
                    throw e;
                } else {
                    res.render("usersList", {users: r.rows, category, order, searched: true});
                }
            });
        } else {
            res.render("usersList", {users: [], category, order, searched: true});
        }
    }
};

const deleteUser = (req, res) => {
    pool.query('delete from users where _id = $1', [req.params.userId], (e, r) => {
        if (e) {
            throw e;
        } else {
            res.redirect("/userList");
        }
    });
};

const editUserGet = (req, res) => {
    pool.query('select * from users where _id = $1', [req.params.userId], (e, r) => {
        if (e) {
            throw e;
        } else {
            if (r.rows.length !== 0) {
                res.render("editUser", {user: r.rows[0]});
            } else {
                res.render("error", {message: "That user does not exist"});
            }
        }
    });
};

const editUserPost = (req, res) => {
    if (
        req.body["first-name"] === "" || req.body["last-name"] === "" ||
        req.body["email-address"] === "" || req.body["age"] === ""
    ) {
        res.render("error", {message: "Inputs cannot be blank"});
    } else if (req.body["age"] <= 0) {
        res.render("error", {message: "Age has to be greater than 0"});
    } else {
        const body = req.body;
        pool.query('update users set first = $1, last = $2, age = $3, emailaddress = $4 where _id = $5', [body["first-name"], body["last-name"], body.age, body["email-address"], req.params.userId], (e, r) => {
            if (e) {
                throw e;
            } else {
                res.redirect("/userList");
            }
        });
    }
};

const categoryAndOrder = (category, order) => {
    if (category === "age" || category === "_id") {
        return `select * from users order by ${category} ${order === "ascending" ? "asc" : "desc"}`;
    } else {
        return `select * from users order by LOWER(${category}) ${order === "ascending" ? "asc" : "desc"}`;
    }
    
};

const checkForCategoryAndOrder = (cookies) => {
    if (cookies === undefined ||
        (cookies.category === undefined &&
        cookies.order === undefined)) {
        return {
            category: "_id",
            order: "ascending"
        };
    } else {
        return {
            category: cookies.category,
            order: cookies.order
        };
    }
};

module.exports = {
    createUser,
    displayAllUsers,
    userListPost,
    deleteUser,
    editUserGet,
    editUserPost
};