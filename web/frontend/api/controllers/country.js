/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug      = require('debug')('api:country-controller');
var async      = require('async');
var moment     = require('moment');
var _          = require('lodash');

var config          = require('../config');
var CustomError     = require('../lib/custom-error');
var Country         = require('../dal/country');
var countriesData   = require('../lib/countries-data');

/**
 * Create a country.
 *
 * @desc create a country and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createCountry(req, res, next) {
  debug('create country');

  // Begin workflow
  var workflow = new EventEmitter();
  var body = req.body;

  // validating country data
  // cant trust anyone
  workflow.on('validate', function validateCountry() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'COUNTRY_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createCountry');
  });

  workflow.on('createCountry', function createCountry() {
    var verificationLink;


    Country.create(body, function (err, country) {
      if(err) {
        return next(CustomError({
          name: 'COUNTRY_CREATION_ERROR',
          message: err.message
        }));
      }


      workflow.emit('completeWorkflow', country);

    });


  });


  workflow.on('completeWorkflow', function (country) {

    res.status(201).json(country);
  });

  workflow.emit('validate');
};

/**
 * Get a single country.
 *
 * @desc Fetch a country with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneCountry(req, res, next) {
  debug('fetch country:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Country.get(query, function cb(err, country) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(country);
  });
};

/**
 * Update a single country.
 *
 * @desc Fetch a country with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateCountry(req, res, next) {
  debug('updating country:'+ req.params.id);

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;


  update = {
    $set: body
  };

  Country.update(query, update, function cb(err, country) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(country);

  });

};

/**
 * Delete/Archive a single country.
 *
 * @desc Fetch a country with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteCountry(req, res, next) {
  debug('deleting country:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Country.delete(query, function cb(err, country) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    res.json(country);

  });

};

/**
 * Get a collection of countries with pagination
 *
 * @desc Fetch a collection of countries
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAllByPagination = function fetchAllcountries(req, res, next) {
  debug('get a collection of countries');

  var page   = req.query.page || 1;
  var limit  = req.query.per_page || 10;

  var opts = {
    page: page,
    limit: limit,
    sort: { }
  };
  var query = {};

  Country.getCollectionByPagination(query, opts, function cb(err, countries) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(countries);
  });
};

/**
 * Get a collection of countries
 *
 * @desc Fetch a collection of countries
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllcountries(req, res, next) {
  debug('get a collection of countries');

  var query = {};
  var opts = {};

  Country.getCollection(query, opts, function cb(err, countries) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(countries);
  });
};

/**
 * Create Countries with pre-saved data.
 */
exports.populate = function populate(req, res, next) {
  debug('populate countries collection');

  countriesData(function (err, path) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    var data = require(path);

    data = data.map(function (item) {
      return item.name;
    });

    async.each(data, function worker(country, done) {
      var body =  {
        name: country
      };

      Country.create(body, done);
    }, function (err) {
      if(err) {
        return next(CustomError({
          name: 'SERVER_ERROR',
          message: err.message,
          status: 500
        }));
      }

      res.json({ message: 'done' });
    });
  });
};
