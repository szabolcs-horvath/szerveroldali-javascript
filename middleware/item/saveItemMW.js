/*
 * Ha res.locals.item üres, új itemet hoz létre, egyébként felülírja
 * a res.locals.item-et a req.body-ban lévő adatokkal
*/
module.exports = function(objRep) {
    return (req, res, next) => {
        if (
            typeof req.body.itemName === 'undefined' ||
            typeof req.body.itemAmount === 'undefined' ||
            typeof req.body.itemUnit === 'undefined' ||
            typeof req.body.itemExpiryDate === 'undefined'
            ) {
            return next();
        }

        if (typeof res.locals.item === 'undefined') {
            //TODO
            const item = 
            {
                id: 1,
                name: "Rama margarin",
                amount: "200",
                unit: "g",
                expiryDate: "2022-03-12"
            };

            res.locals.item = item;
        }

        res.locals.item.name = req.body.itemName;
        res.locals.item.name = req.body.itemName;
        res.locals.item.name = req.body.itemName;
        res.locals.item.name = req.body.itemName;

        res.locals.item.save(err => {
            if (err) {
                return next(err);
            }
            
            return res.redirect(`/container/${res.locals.container.id}`);
        })
    }
}