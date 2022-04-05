/*
 *  Beállítja a res.locals.containers-ben lévő containerek itemCount propertyjét.
*/
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ItemModel = requireOption(objRep, 'ItemModel');

    return (req, res, next) => {
        if (typeof res.locals.containers === undefined) {
            return next();
        }

        res.locals.containers.forEach(c => {
            ItemModel.countDocuments({ _container: c._id }, (err, count) => {
                //TODO Ez valamiért nem jó
                c.itemCount = count;
            });
        });

        return next();
    };
};
