const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/KJ4YY7', { useNewUrlParser: true });

module.exports = mongoose;