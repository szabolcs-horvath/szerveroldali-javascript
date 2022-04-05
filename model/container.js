const Schema = require('mongoose').Schema;
const db = require('../dbconfig/db');

const Container = db.model('Container', {
    name: String,
    color: String,
    itemCount: int 
});

module.exports = Container;