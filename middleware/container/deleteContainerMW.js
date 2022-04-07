/*
 * Törli a res.locals.container-ben lévő containert és a hozzá tartozó itemeket, amik a res.locals.items-ben vannak
*/
module.exports = function(objRep) {
    return async (req, res, next) => {
        if (typeof res.locals.container === 'undefined') {
            return next();
        }

        for (const i of res.locals.items) {
            await i.remove();
        }

        await res.locals.container.remove(err => {
            if (err) {
                return next(err);
            }
        });

        return res.redirect('/');
    };
};