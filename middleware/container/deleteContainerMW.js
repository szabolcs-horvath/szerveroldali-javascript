module.exports = function(objRep) {
    return (req, res, next) => {
        if (typeof res.locals.container === 'undefined') {
            return next();
        }

        res.locals.container.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        })
    }
}