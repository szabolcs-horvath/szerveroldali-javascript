module.exports = function(objRep) {
    return (req, res, next) => {
        //TODO
        const container = {
            id: 1,
            name: "Konyhai hűtő",
            color: "#f6b73c"
        }

        res.locals.container = container;
        return next();
    };
};