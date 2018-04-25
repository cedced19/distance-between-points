
var distanceBtwPoints = require('../');

var assert = require('assert');
var path = require('path');

var example1 = {
    reference: {
        latitude:48.763133,
        longitude:7.255974
    },
    point: {
        latitude:48.751905,
        longitude:7.256158
    }
}

var example2 = {
    reference: {
        lat:48.763133,
        lng:7.255974
    },
    point: {
        lat:48.751905,
        lng:7.256158
    }
}

describe('Test the function', function () {
    
    it('should get the right distance', function () {
        var d = distanceBtwPoints(example1.point, example1.reference);
        assert.equal(d, 1249);
    });
    it('should get the right distance with other label', function () {
        var d = distanceBtwPoints(example2.point, example2.reference, 'lat', 'lng');
        assert.equal(d, 1249);
    });
});
