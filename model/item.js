const Schema = require('mongoose').Schema;
const db = require('../dbconfig/db');

const Item = db.model('Item', {
    name: String,
    amount: String,
    unit: String,
    expiryDate: String,
    _container: {
        type: Schema.Types.ObjectId,
        ref: 'Container'
    }
});

module.exports = Item;