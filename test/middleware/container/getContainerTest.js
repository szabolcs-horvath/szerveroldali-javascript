const expect = require('chai').expect;
const getContainerMW = require('../../../middleware/container/getContainerMW');

describe('getContainer middleware', function () {

    it('should call next with an error if findOne returned an error', function (done) {
        const objRep = {
            ContainerModel: {
                findOne: function({}, cb) {
                    cb('hiba', {});
                }
            }
        };
        const reqMock = {
            params: {}
        };
        const resMock = {};
        function nextMock(err, container) {
            expect(err).to.be.eql('hiba');
            done();
        };

        getContainerMW(objRep)(reqMock, resMock, nextMock);
    });

    it('should call next with an error if findOne returned a container that is undefined', function(done) {
        const objRep = {
            ContainerModel: {
                findOne: function({}, cb) {
                    cb(undefined, undefined);
                }
            }
        };
        const reqMock = {
            params: {}
        };
        const resMock = {};
        function nextMock(err, container) {
            expect(container).to.be.eql(undefined);
            done();
        };

        getContainerMW(objRep)(reqMock, resMock, nextMock);
    });

    it('should put container into res.locals.container when a container is found in the db', function(done) {
        const objRep = {
            ContainerModel: {
                findOne: function({}, cb) {
                    cb(undefined, 'onecontainerfromdb');
                }
            }
        };
        const reqMock = {
            params: {}
        };
        const resMock = {
            locals: {}
        };
        function nextMock(err, container) {
            expect(resMock.locals.container).to.be.eql('onecontainerfromdb');
            done();
        };

        getContainerMW(objRep)(reqMock, resMock, nextMock);
    });
});