/*
 * Betölti a megadott id-vel rendelkező containert a res.locals.container-be
*/
const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ContainerModel = requireOption(objRep, 'ContainerModel');

    return (req, res, next) => {
        return ContainerModel.findOne({ _id: req.params.containerid }, (err, container) => {
            if (err || !container) {
                return next(err, container);
            }

            res.locals.container = container;
            return next();
        });
    };
};