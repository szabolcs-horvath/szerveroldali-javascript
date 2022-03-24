module.exports = function(objRep) {
    return (req, res, next) => {
        //TODO
        const container = {
            id: 1,
            name: "Konyhai hűtő",
            color: "#f6b73c",
            items: [
                {
                    id: 1,
                    name: "Rama margarin",
                    amount: "200",
                    unit: "g",
                    expiryDate: "2022-03-12"
                },
                {
                    id: 2,
                    name: "Majonéz",
                    amount: "1",
                    unit: "tubus",
                    expiryDate: "2022-11-23"
                },
                {
                    id: 3,
                    name: "tej",
                    amount: "1/2",
                    unit: "l",
                    expiryDate: "2022-02-26"
                }
            ]
        }

        res.locals.container = container;
        return next();
    };
};