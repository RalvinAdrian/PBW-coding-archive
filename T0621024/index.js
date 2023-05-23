import express from "express";
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;
const publicPath = path.resolve('public')

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('App started');
})

app.get('/', (req, res) => {
    res.render('home', { posts: posts });
});

app.get('/addPost', (req, res) => {
    // empty alert when started
    res.render('addPost', { alert: '' });
})

let users = ['Me', 'Bocchi', 'Ryo', 'Nijka Ijichi', 'Ikuyo Kita', 'PA-san', 'Anon'];
let posts = []; // simpan data postingan
app.post('/add', (req, res) => {
    let taggedUser = req.body.tags.split(',');
    let isValid = false;
    // value akan true jika valid, validasi lagi dengan !tags.includes(author);
    let filteredUsers = taggedUser.every(tag => users.includes(tag) && tag !== req.body.author);

    if (filteredUsers && taggedUser.length > 0) {
        let post = {
            author: req.body.author,
            post: req.body.post,
            tags: taggedUser
        };
        posts.push(post);
        res.redirect('/');
    } else {
        // failed to validate
        res.render('addPost', { alert: 'Data tag salah' });
    }
});
// app.get('/filter', (res, get) => {
//     const author = 'Me';
//     const filteredPosts = posts.filter(post => post.author === author);
//     res.render('filter', { posts: filteredPosts, selectedAuthor: author, pageTitle: `${author}'s Timeline` })
// })

// todo, fix this naming stuff (data isnt displayed properly either)
app.get('/filter:author', (req, res) => {
    const author = req.params.author;
    const filteredPosts = posts.filter(post => post.author === author);
    res.render('filter', { posts: filteredPosts, selectedAuthor: author, pageTitle: `${author}'s Timeline` });
});

