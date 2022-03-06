const http = require('http');

const express = require('express');
const { contentType } = require('express/lib/response');
const app = express();
app.use('/static', express.static('static'));

const server = app.listen(3000, function () {
    console.log('Running on :3000');
});

app.get('/static', function (req, res, next)  {
    res.set('Content-Type', 'text/html');
    res.send('home.html');
});