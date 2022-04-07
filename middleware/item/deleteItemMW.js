/*
 * Törli a res.locals.item-ben lévő itemet
*/
module.exports = function(objRep) {
    return (req, res, next) => {
        if (typeof res.locals.item === 'undefined') {
            return next();
        }

        return res.locals.item.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/container/${res.locals.container._id}`);
        });
    };
};