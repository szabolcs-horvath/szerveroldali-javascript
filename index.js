const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

//app.use('/', express.static('static')); // Use static pages

require('./route/index')(app); // Use routing

const server = app.listen(3000, function () {
    console.log('Running on :3000');
});