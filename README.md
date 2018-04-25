# distance-between-points
A module to get the distance between points on the Earth.

[![Build Status](https://travis-ci.org/cedced19/distance-between-points.svg?branch=master)](https://travis-ci.org/cedced19/distance-between-points)

## Usage
```javascript
var example = {
    reference: {
        lat:48.763133,
        lng:7.255974
    },
    point: {
        lat:48.751905,
        lng:7.256158
    }
}

var distanceBtwPoints = require('distance-between-points');
distanceBtwPoints(example.point, example.reference, 'lat', 'lng');
```
