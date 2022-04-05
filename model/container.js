const Schema = require('mongoose').Schema;
const db = require('../dbconfig/db');

const Container = db.model('Container', {
    name: String,
    color: String
});

module.exports = Container;