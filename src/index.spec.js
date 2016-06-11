'use strict';

import chai from 'chai';

chai.should();

describe('Array', function () {
    describe('#indexOf()', function () {
        it('it should return a value of -1 when the value is not present', function () {
            [1,2,3].indexOf(5).should.equal(-1);
        });
    });
});
