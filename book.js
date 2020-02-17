const { pool } = require('./config');
const getBooks = (req, res) => {
    pool.query('SELECT * FROM book ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
};

//add a book
const createBook = (req, res) => {
    const { author, book_name, date_published } = req.body;
    pool.query('INSERT INTO book (author, book_name, date_published) VALUES ($1, $2, to_date($3,\'MM/DD/YYYY\'))', [author, book_name, date_published], (error, results) => {
        if (error) {
            throw error
        }
        //console.log(` ${results.rows[0].id}`);
        res.redirect('/books');
    })
};

module.exports = {
    getBooks,
    createBook
    // updateBook,
    //  deleteBook,
    // getUserByAuthor   
};