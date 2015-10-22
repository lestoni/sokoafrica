// Access Layer for Country Data.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-country');
var moment  = require('moment');
var _       = require('lodash');

var Country      = require('../models/country');
var mongoUpdate = require('../lib/mongo-update');

var returnFields = Country.whitelist;
var population = [];

/**
 * create a new country.
 *
 * @desc  creates a new country and saves them
 *        in the database
 *
 * @param {Object}  countryData  Data for the country to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(countryData, cb) {
  debug('creating a new country');

  var searchQuery = { name: countryData.name };

  // Make sure country does not exist
  Country.findOne(searchQuery, function countryExists(err, isPresent) {
    if(err) {
      return cb(err);
    }

    if(isPresent) {
      exports.get({ _id: isPresent._id }, function (err, country) {
        if(err) {
          return cb(err);
        }

        cb(null, country);

      });

      return;
    }


    // Create country if is new.
    var countryModel  = new Country(countryData);

    countryModel.save(function saveCountry(err, data) {
      if (err) {
        return cb(err);
      }


      exports.get({ _id: data._id }, function (err, country) {
        if(err) {
          return cb(err);
        }

        cb(null, country);

      });

    });

  });

};

/**
 * delete a country
 *
 * @desc  delete data of the country with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting country: ', query);

  Country
    .findOne(query, returnFields)
    .populate(population)
    .exec(function deleteCountry(err, country) {
      if (err) {
        return cb(err);
      }

      if(!country) {
        return cb(null, {});
      }

      country.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, country);

      });

    });
};

/**
 * update a country
 *
 * @desc  update data of the country with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating country: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: returnFields
  };

  updates = mongoUpdate(updates);

  Country
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updateCountry(err, country) {
      if(err) {
        return cb(err);
      }

      cb(null, country || {});
    });
};

/**
 * get a country.
 *
 * @desc get a country with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting country ', query);

  Country
    .findOne(query, returnFields)
    .populate(population)
    .exec(function(err, country) {
      if(err) {
        return cb(err);
      }

      cb(null, country || {});
    });
};

/**
 * get a collection of countries
 *
 * @desc get a collection of countries from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of countries');

  Country
    .find(query, returnFields)
    .populate(population)
    .exec(function (err, countries) {
      if(err) {
        return cb(err);
      }

      cb(null, countries);
    });

};

/**
 * get a collection of countries using pagination
 *
 * @desc get a collection of countries from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollectionByPagination = function getCollection(query, qs, cb) {
  debug('fetching a collection of countries');

  var opts = {
    columns:  returnFields,
    sortBy:   qs.sort || {},
    populate: population,
    page:     qs.page,
    limit:    qs.limit
  };


  Country.paginate(query, opts, function (err, docs, page, count) {
    if(err) {
      return cb(err);
    }


    var data = {
      total_pages: page,
      total_docs_count: count,
      docs: docs
    };

    cb(null, data);

  });

};
