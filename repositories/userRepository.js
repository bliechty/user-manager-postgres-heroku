const { pool } = require('../config');

const createUser = (req, res) => {
    pool.query('insert into users', [], (e, r) => {

    });
};

const displayAllUsers = (req, res) => {
    pool.query('select * from users', (e, r) => {
        if (e) {
            throw e;
        } else {
            const users = r.rows.map(user => {
                const regex = /(.+)\./;
                const createddate = user.createddate.match(regex)[1];
                console.log(createddate);
                return {
                    ...user,
                    createddate
                }
            });
            console.log(users);
            res.render("usersList", {users});
        }
    });
};

module.exports = {
    createUser,
    displayAllUsers
};