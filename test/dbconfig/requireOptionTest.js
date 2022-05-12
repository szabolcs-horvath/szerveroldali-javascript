var expect = require('chai').expect;
var requireOption = require('../../dbconfig/requireOption');

describe('requireOption function', function() {

    it('should throw a TypeError, if the given propertyName is undefined on the objectRepository', function(done) {
        const objRep = {}

        const f = function() { requireOption(objRep, 'testPropertyName'); }

        expect(f).to.throw(TypeError, 'testPropertyName required');
        done();
    });
});