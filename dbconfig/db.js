const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/KJ4YY7', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;