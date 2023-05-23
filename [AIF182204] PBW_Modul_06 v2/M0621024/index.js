import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;
const publicSource = path.resolve('public');

app.use(express.static(publicSource));
app.set('view engine', 'ejs');
// buat bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Ready!');
});
app.get('/', (req, res) => {
    let current = '';
    if (req.query.color !== undefined) {
        current = req.query.color;
    }

    res.render('home', {
        color: current
    })

})
// jangan diutak-atik lagi urlnya, pakai base url awal
app.post('/', (req, res) => {
    const color = req.body.color;
    res.redirect(`/?color=${color}`);
})