/*
 * Betölti a res.locals.items-be a res.locals.container itemjeit
*/
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ItemModel = requireOption(objRep, 'ItemModel');
    
    return (req, res, next) => {
        if (typeof res.locals.container === 'undefined') {
            return next();
        }

        ItemModel.find({ _container: res.locals.container._id }, (err, items) => {
            if (err) {
                return next(err);
            }

            res.locals.items = items;
            return next();
        });
    };
};
