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
            res.json(r.rows);
        }
    });
};

module.exports = {
    createUser,
    displayAllUsers
};