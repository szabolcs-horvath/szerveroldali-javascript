const express = require('express');
const app = express();

//app.set('view engine', 'ejs');
//require('./route/index')(app);

app.use('/', express.static('static'));

const server = app.listen(3000, function () {
    console.log('Running on :3000');
});