const express = require('express');
const app = express();

const server = app.listen(3000, function () {
    console.log('Running on :3000');
});

app.use('/', express.static('static'));
