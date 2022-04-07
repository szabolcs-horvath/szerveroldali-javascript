/*
 * Betölti a megadott id-vel rendelkező itemet a res.locals.item-be
 */
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ItemModel = requireOption(objRep, 'ItemModel');

    return (req, res, next) => {
        return ItemModel.findOne({ _id: req.params.itemid }, (err, item) => {
            if (err || !item) {
                return next(err);
            }

            res.locals.item = item;
            return next();
        });      
    };
};