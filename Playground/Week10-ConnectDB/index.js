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
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'IDE',
});

app.listen(port, () => {
    console.log('App started');
    console.log(`Server running on http://localhost:${port}`);
})

// Connect db
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});
// Test routes
// app.get('/', (req, res) => {
//     connection.query('SELECT * FROM users', (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });

// display data to db-dump.ejs
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (err, results) => {
        if (err) throw err;
        res.render('db-dump', { users: results });
    });
});