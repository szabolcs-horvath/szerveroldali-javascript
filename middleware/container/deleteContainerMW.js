/*
 * Törli a res.locals.container-ben lévő containert
*/
module.exports = function(objRep) {
    return (req, res, next) => {
        if (typeof res.locals.container === 'undefined') {
            return next();
        }

        return res.locals.container.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};