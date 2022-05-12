/*
 *  Beállítja a res.locals.containers-ben lévő containerek itemCount propertyjét.
*/
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ItemModel = requireOption(objRep, 'ItemModel');

    return async (req, res, next) => {
        if (typeof res.locals.containers === undefined) {
            return next('res.locals.containers is undefined');
        }

        for (const c of res.locals.containers) {
            c.itemCount = await ItemModel.countDocuments({ _container: c._id });
        }

        return next();
    };
};
