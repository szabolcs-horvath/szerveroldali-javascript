/*
 * Betölti a res.locals.containers-be az összes containert
*/
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ContainerModel = requireOption(objRep, 'ContainerModel');

    return (req, res, next) => {
        ContainerModel.find({}, (err, containers) => {
            if (err) {
                return next(err);
            }

            res.locals.containers = containers;
            return next();
        });
    };
};