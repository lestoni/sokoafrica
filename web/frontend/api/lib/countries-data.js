/**
 * Load Module Dependencies.
 */
var request = require('request');
var fs = require('fs');

module.exports = function (cb) {
  var path = __dirname + '/countries.json';

  request
    .get('https://restcountries.eu/rest/v1/region/africa')
    .pipe(fs.createWriteStream(path))
    .on('finish', function () {
      cb(null, path);
    })
    .on('error', function (e) {
      cb(err);
    });
};
