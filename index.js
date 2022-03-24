const express = require('express');
const app = express();

app.set('view engine', 'ejs');
//app.use('/', express.static('static'));

require('./route/index')(app);

const server = app.listen(3000, function () {
    console.log('Running on :3000');
});