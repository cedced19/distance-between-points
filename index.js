

module.exports = function (position, reference, latLabel, lngLabel) {
    if (!latLabel) latLabel = 'latitude';
    if (!lngLabel) lngLabel = 'longitude';
    var R = 6378.137;
    var dLat = reference[latLabel] * Math.PI / 180 - position[latLabel] * Math.PI / 180;
    var dLon = reference[lngLabel] * Math.PI / 180 - position[lngLabel] * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(position[latLabel] * Math.PI / 180) * Math.cos(reference[latLabel] * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.floor(d * 1000);
};