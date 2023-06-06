import path from 'path';
import express from 'express';
import { calculate_get, calculate_post } from './controller/controller.js';

const app = express();

app.use(express.static(path.resolve('public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/calculate', (req, res) => {
    const data = req.query;
    const result = calculate_get(data);
    res.send(result.toString());
});

app.post('/calculate', (req, res) => {
    const data = req.body;
    const result = calculate_post(data);
    res.json(result);
});

app.listen(8080, () => {
    console.log('App started');
    console.log(`Server running on http://localhost:8080`);
});
