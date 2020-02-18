const { pool } = require('../config');

const createUser = (req, res) => {
    pool.query('insert into users', [], (e, r) => {

    });
};

const displayAllUsers = (req, res) => {
    console.log(req.cookies);
    const cookies = checkForCategoryAndOrder(req.cookies);
    const category = cookies.category;
    const order = cookies.order;
    pool.query(categoryAndOrder(category, order), (e, r) => {
        if (e) {
            throw e;
        } else {
            const users = r.rows.map(user => {
                const regex = /(.+)\./;
                const createddate = user.createddate.match(regex)[1];
                return {
                    ...user,
                    createddate
                }
            });
            res.render("usersList", {users, category, order});
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
        const sort = categoryAndOrder(category, order);
        pool.query(sort, (e, r) => {
            const users = r.rows.map(user => {
                const regex = /(.+)\./;
                const createddate = user.createddate.match(regex)[1];
                return {
                    ...user,
                    createddate
                }
            });
            res.render("usersList", {users, category, order});
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
            // To Do
            // repository.search(searchInput).then(users => {
            //     res.render("usersList", {users, category, order, searched: true});
            // }).catch(e => {
            //     console.log(`Error occurred: ${e}`);
            // });
        } else {
            res.render("usersList", {users: [], category, order, searched: true});
        }
    }
};

const categoryAndOrder = (category, order) => {
    return `select * from users order by ${category} ${order === "ascending" ? "asc" : "desc"}`;
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
    userListPost
};