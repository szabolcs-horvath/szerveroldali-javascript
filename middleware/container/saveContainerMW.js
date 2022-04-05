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
            //TODO
            // const container = {
            //     id: 1,
            //     name: "Konyhai hűtő",
            //     color: "#f6b73c",
            //     items: [
            //         {
            //             id: 1,
            //             name: "Rama margarin",
            //             amount: "200",
            //             unit: "g",
            //             expiryDate: "2022-03-12"
            //         },
            //         {
            //             id: 2,
            //             name: "Majonéz",
            //             amount: "1",
            //             unit: "tubus",
            //             expiryDate: "2022-11-23"
            //         },
            //         {
            //             id: 3,
            //             name: "tej",
            //             amount: "1/2",
            //             unit: "l",
            //             expiryDate: "2022-02-26"
            //         }
            //     ]
            // };
    
            res.locals.container = new ContainerModel();
        }

        res.locals.container.name = req.body.nameInput;
        res.locals.container.color = req.body.colorInput;

        res.locals.container.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/container/${res.locals.container.id}`);
        });
    }
}