import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const port =8080;
const app= express();
const staticPath=path.resolve('public');
app.use(express.static(staticPath));

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

const posts=[];
const users=['Me','Friend A','Friend B'];
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{
        arrUser: users,
        posts:posts
    });
});
app.get('/add',(req,res)=>{
    res.render('add',{
        arrUser: users,
        wrongInput: false
    });
});
app.post('/add',(req,res)=>{
    let addStatus=true;
    console.log(req.body);
    let author=Object.values(req.body)[0];
    let tagsRaw=Object.values(req.body)[2];
    let tags = tagsRaw.split(', ');
    // console.log(tags);
    // console.log(tags.includes('Friend A'));
    // console.log(tags.includes('Friend B'));
    tags.forEach(tag=>{
        if(tag===author
            || users.includes(tag)===false){
            addStatus=false;
        }
    });
    if(addStatus===true){
        posts.push(req.body);
        res.render('home',{
            arrUser: users,
            posts:posts
        });
    }
    else{
        res.render('add',{
            arrUser: users,
            wrongInput: true
        });
    }

});
app.get('/filter/:user',(req,res)=>{
    req.params.user.replaceAll('_', ' ');
    // console.log('user param: '+req.params.user);
    res.render('filter',{
        arrUser: users,
        posts:posts,
        filter: req.params.user
    });
});



