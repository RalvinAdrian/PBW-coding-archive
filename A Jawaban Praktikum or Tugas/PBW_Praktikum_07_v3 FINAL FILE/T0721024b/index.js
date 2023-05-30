import express from 'express';
import mysql from 'mysql';
import path from 'path';
import bodyParser from 'body-parser';

import crypto from 'crypto'
import session from 'express-session';

const app = express();
const port = 8080;
const publicPath = path.resolve('public')

app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'IDE',
});
// Middleware connection 
app.use(
    session({
        secret: 'mau keluar kota beli nasi padang',
        resave: false,
        saveUninitialized: true
    })
);

app.listen(port, () => {
    console.log('App started');
    console.log(`Server running on http://localhost:${port}`);
})



app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password

    // validation from server side
    if (!username || !password) {
        res.render('login', { alertMenu: 'Username dan password harus diisi!' });
        return;
    }

    // hash passwordnya
    const hashed_pass = crypto.createHash('sha256').update(password).digest('base64');

    const checkAccountQuery = 'SELECT * FROM users WHERE username = ? AND pass = ?';

    // connect db untuk cari
    pool.query(checkAccountQuery, [username, hashed_pass], (error, results) => {
        if (error) throw error;

        // 3. Cek kombinasinya benar atau tidak
        if (results.length > 0 && password === 'password') {
            // set password = password dulu untuk diawalnya
            req.session.username = results[0].username;
            res.redirect('/users');
        } else {
            res.render('login', { alertMenu: 'Invalid username or password.' });
        }
    });
});
app.get('/login', (req, res) => {
    // alertMenu harus selalu diisi
    res.render('login', { alertMenu: null });
    // res.render('login', { alertMenu: 'Tes ngab' });
})

app.get('/logout', (req, res) => {
    // 8. Delete session data
    req.session.destroy();
    res.redirect('/');
});

// Middleware for login verification (no 7)
const auth = (req, res, next) => {
    // Step 7: Check if the user is authenticated and has admin role
    const searchUserQuery =
        `??`; // todo
    if (req.session.username) {
        pool.query(
            searchUserQuery,
            [req.session.username],
            (error, results) => {
                if (error) throw error;

                if (results.length > 0 && results[0].role === 'admin') {
                    next(); // User is authenticated and has admin role, proceed to the next middleware
                } else {
                    res.redirect('/login', { alertMenu: 'Auth Failed, not an admin account' });
                }
            }
        );
    } else {
        res.redirect('/');
    }
};

app.get('/', (req, res) => {
    // data untuk session
    const username = req.session.username || null;

    // check if user is logged in
    if (username) {
        // User is logged in, redirect to '/users' path
        res.redirect('/users');
    } else {
        // User is not logged in, render 'login' template
        res.render('login', { alertMenu: null });
    }
});

app.get('/users', (req, res) => {
    // data untuk session
    const username = req.session.username || null;

    // Add your existing code for fetching and rendering 'users.ejs' template here
    const filter = req.query.filter || null;
    const page = parseInt(req.query.page) || 1;
    const show = 8; // Jumlah baris yg dimunculkan per page
    const countQuery = 'SELECT COUNT(*) AS totalRows FROM user_data';
    const queryDefault = 'SELECT * FROM user_data LIMIT ?, ?';

    pool.query(countQuery, (err, countResult) => {
        if (err) throw err;
        const totalRows = countResult[0].totalRows;
        const firstIndexData = (page - 1) * show;
        const lastIndexData = show;

        pool.query(queryDefault, [firstIndexData, lastIndexData], (err, results) => {
            if (err) throw err;
            res.render('users', {
                user: results,
                filter,
                show,
                page,
                totalRows,
                login: username,
                loggedIn: true
            });
        });
    });
});

// Form submission utk filter nama
app.get('/search', (req, res) => {
    const filter = req.query.filter; // Take data dari form filter
    // Query untuk mendapatkan nama, SQL injection prevention pakai ? dan params di function setelahnya.
    const query = 'SELECT * FROM user_data WHERE name LIKE ?';

    // Execute the SQL query with the filter value as a parameter
    pool.query(query, [`%${filter}%`], (err, results) => {
        if (err) throw err;
        res.render('users', { user: results });
    });
});

app.get('/userGroup', (req, res) => {
    const query = 'SELECT name FROM usergroups';
    pool.query(query, (err, results) => {
        if (err) throw err;
        const userGroups = results.map((row) => row.name);
        res.render('userGroup', { userGroups });
    });
});

app.post('/addNewRole', (req, res) => {
    const newRole = req.body.iGroup;
    const query = 'INSERT INTO usergroups (ID_UG, name) VALUES (?, ?)';
    // Start dari 4 setelah 3 role sebelumnya
    const values = [4, newRole];
    pool.query(query, values, (err, results) => {
        if (err) throw err;
        res.redirect('/userGroup'); // Redirect ke userGroup setelahnya
    });
});

app.get('/update', (req, res) => {
    const username = req.session.username || '';
    // note jika value belum ada harus diisi null supaya tidak ada referenceError
    res.render('update', { selectedId: null, newUsername: null, login: username });
})

app.post('/updateUsername', (req, res) => {
    const selectedId = req.body.iID;
    const newUsername = req.body.iUsername;
    // Update the tables that have the corresponding username and userId
    const updateUserQuery = 'UPDATE users SET username = ? WHERE userId = ?';

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(updateUserQuery, [newUsername, selectedId], (error, results) => {
            connection.release();

            if (error) throw error;

            res.render('update', { selectedId, newUsername });
        });
    });
});