/*
 * Betölti a megadott id-vel rendelkező itemet a res.locals.item-be
 */
module.exports = function(objRep, itemid) {
    return (req, res, next) => {
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
        return next();
    }
}