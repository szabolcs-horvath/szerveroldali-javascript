module.exports = function(objRep, ejsTemplate) {
    return (req, res, next) => {
        res.render(ejsTemplate);
    }
}