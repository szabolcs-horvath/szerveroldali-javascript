module.exports = function(objRep) {
    return (req, res, next) => {
        if (typeof res.locals.item === 'undefined') {
            return next();
        }

        res.locals.item.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/container/${res.locals.container.id}`);
        })
    }
}