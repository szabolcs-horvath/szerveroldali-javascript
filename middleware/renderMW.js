/*
 * A kapott ejs template-t rendereli
*/
module.exports = function(objRep, ejsTemplate) {
    return (req, res, next) => {
        res.render(ejsTemplate);
    }
}