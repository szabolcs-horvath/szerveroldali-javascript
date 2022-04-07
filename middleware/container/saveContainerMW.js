/*
 * Ha res.locals.container üres, új containert hoz létre, egyébként felülírja
 * a res.locals.container-t a req.body-ban lévő adatokkal
*/

const requireOption = require('../../dbconfig/requireOption');

module.exports = function(objRep) {
    const ContainerModel = requireOption(objRep, 'ContainerModel');

    return (req, res, next) => {
        if (
            req.method === 'GET' ||
            typeof req.body.nameInput === 'undefined' ||
            typeof req.body.colorInput === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.container === 'undefined') {
            res.locals.container = new ContainerModel();
        }

        res.locals.container.name = req.body.nameInput;
        res.locals.container.color = req.body.colorInput;

        return res.locals.container.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/container/${res.locals.container.id}`);
        });
    }
}