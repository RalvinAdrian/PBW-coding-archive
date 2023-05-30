import express from 'express';
import mysql from 'mysql';
import path from 'path';
import bodyParser from 'body-parser';

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

app.listen(port, () => {
    console.log('App started');
    console.log(`Server running on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    const filter = req.query.filter || '';
    const page = parseInt(req.query.page) || 1;
    // limit to 8 only
    const show = 8; // Jumlah baris yg dimunculkan per page
    // utk menghitung jumlah baris
    const countQuery = 'SELECT COUNT(*) AS totalRows FROM user_data';
    // get query sebanyak 8 baris saja berdasarkan perhitungan index
    const queryDefault = 'SELECT * FROM user_data LIMIT ?, ?';

    // UNTUK COUNT QUERY DULU
    pool.query(countQuery, (err, countResult) => {
        if (err) throw err;
        const totalRows = countResult[0].totalRows;

        // index array pertama pokoke
        const firstIndexData = (page - 1) * show;
        const lastIndexData = show;

        // RANGE DATA YANG DIDISPLAY BARU MASUK DISINI
        pool.query(queryDefault, [firstIndexData, lastIndexData], (err, results) => {
            if (err) throw err;
            res.render('users', { user: results, filter, show, page, totalRows });
        });
    });
});

app.get('/users', (req, res) => {
    const filter = req.query.filter || '';
    const page = parseInt(req.query.page) || 1;
    res.redirect(`/?filter=${filter}&page=${page}`);
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
    // note jika value belum ada harus diisi null supaya tidak ada referenceError
    res.render('update', { selectedId: null, newUsername: null });
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


// async approach belum final!!

// app.post('/updateUsername', async (req, res) => {
//     try {
//         const selectedId = req.body.iID;
//         const newUsername = req.body.iUsername;
//         // Update two tables that have the username data
//         const updateUserQuery = 'UPDATE users SET userId = ? WHERE username = ?';

//         await new Promise((resolve, reject) => {
//             pool.query(updateUserQuery, [selectedId, newUsername], (err, results) => {
//                 if (err) reject(err);
//                 else resolve(results);
//             });
//         });

//         res.render('update', { selectedId, newUsername });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('An error occurred');
//     }
// });
