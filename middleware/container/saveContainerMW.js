module.exports = function(objRep) {
    return (req, res, next) => {
        if (
            typeof req.body.containerName === 'undefined' ||
            typeof req.body.containerColor === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.container === 'undefined') {
            //TODO
            const container = {
                id: 1,
                name: "Konyhai hűtő",
                color: "#f6b73c"
            };
    
            res.locals.container = container;
        }

        res.locals.container.name = req.body.containerName;
        res.locals.container.color = req.body.containerColor;

        res.locals.container.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    }
}