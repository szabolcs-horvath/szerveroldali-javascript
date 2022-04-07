/*
 * Ha res.locals.item üres, új itemet hoz létre, egyébként felülírja
 * a res.locals.item-et a req.body-ban lévő adatokkal
*/
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ItemModel = requireOption(objRep, 'ItemModel');

    return (req, res, next) => {
        if (
            req.method === 'GET' ||
            typeof req.body.itemNameInput === 'undefined' ||
            typeof req.body.itemAmountInput === 'undefined' ||
            typeof req.body.itemUnitInput === 'undefined' ||
            typeof req.body.itemExpiryDateInput === 'undefined'
            ) {
            return next();
        }

        if (typeof res.locals.item === 'undefined') {
            res.locals.item = new ItemModel();
        }

        res.locals.item.name = req.body.itemNameInput;
        res.locals.item.amount = req.body.itemAmountInput;
        res.locals.item.unit = req.body.itemUnitInput;
        res.locals.item.expiryDate = req.body.itemExpiryDateInput;
        res.locals.item._container = res.locals.container._id;

        return res.locals.item.save(err => {
            if (err) {
                return next(err);
            }
            
            return res.redirect(`/container/${res.locals.container._id}`);
        });
    };
};