const express = require('express');
const app = express();
app.use('/static', express.static('static'));

const server = app.listen(3000, function () {
    console.log('Running on :3000');
});

app.use('/static', express.static('static'));
