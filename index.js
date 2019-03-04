const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

app.use(bodyParser.json())

app.post('/api/signup', (req, res) => {
    console.log(req.body);
    res.send("Hello");
})

app.get('/api/signup', (req, res) => {
    res.send("Hello");
})

app.listen(1234, () => console.log('Server listening at 1234'))