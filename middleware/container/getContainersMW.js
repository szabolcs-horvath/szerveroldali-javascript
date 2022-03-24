module.exports = function(objRep) {
    return (req, res, next) => {
        //TODO
        const containers = [
            {
                id: 1,
                name: "Konyhai hűtő",
                color: "#f6b73c"
            },
            {
                id: 2,
                name: "Szekrény",
                color: "#e66465"
            }
        ];

        res.locals.containers = containers;
        return next();
    };
};