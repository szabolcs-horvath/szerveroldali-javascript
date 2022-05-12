const expect = require('chai').expect;
const getItemMW = require('../../../middleware/item/getItemMW');

describe('getItem middleware', function() {

    it('should call next with an error if findOne returned an error', function(done) {
        const objRep = {
            ItemModel: {
                findOne: function({}, cb) {
                    cb('hiba', {});
                }
            }
        };
        const reqMock = {
            params: {}
        };
        const resMock = {};
        function nextMock(err, item) {
            expect(err).to.be.eql('hiba');
            done();
        };

        getItemMW(objRep)(reqMock, resMock, nextMock);
    });

    it('should call next with an error if findOne returned an item that is undefined', function(done) {
        const objRep = {
            ItemModel: {
                findOne: function({}, cb) {
                    cb(undefined, undefined);
                }
            }
        };
        const reqMock = {
            params: {}
        };
        const resMock = {};
        function nextMock(err, item) {
            expect(item).to.be.eql(undefined);
            done();
        };

        getItemMW(objRep)(reqMock, resMock, nextMock);
    });

    it('should put item into res.locals.item when an item is found in the db', function(done) {
        const objRep = {
            ItemModel: {
                findOne: function({}, cb) {
                    cb(undefined, 'oneitemrfromdb');
                }
            }
        };
        const reqMock = {
            params: {}
        };
        const resMock = {
            locals: {}
        };
        function nextMock(err, item) {
            expect(resMock.locals.item).to.be.eql('oneitemrfromdb');
            done();
        };

        getItemMW(objRep)(reqMock, resMock, nextMock);
    });
});