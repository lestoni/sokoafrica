/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug      = require('debug')('api:business-controller');
var async      = require('async');
var moment     = require('moment');
var _          = require('lodash');

var config          = require('../config');
var CustomError     = require('../lib/custom-error');
var Business            = require('../dal/business');

/**
 * Create a business.
 *
 * @desc create a business and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createBusiness(req, res, next) {
  debug('create business');

  // Begin workflow
  var workflow = new EventEmitter();
  var body = req.body;

  // validating business data
  // cant trust anyone
  workflow.on('validate', function validateBusiness() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'BUSINESS_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createBusiness');
  });

  workflow.on('createBusiness', function createBusiness() {
    var verificationLink;


    Business.create(body, function (err, business) {
      if(err) {
        return next(CustomError({
          name: 'BUSINESS_CREATION_ERROR',
          message: err.message
        }));
      }


      workflow.emit('completeWorkflow', business);

    });


  });


  workflow.on('completeWorkflow', function (business) {

    res.status(201).json(business);
  });

  workflow.emit('validate');
};

/**
 * Get a single business.
 *
 * @desc Fetch a business with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneBusiness(req, res, next) {
  debug('fetch business:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Business.get(query, function cb(err, business) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(business);
  });
};

/**
 * Update a single business.
 *
 * @desc Fetch a business with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateBusiness(req, res, next) {
  debug('updating business:'+ req.params.id);

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;


  update = {
    $set: body
  };

  Business.update(query, update, function cb(err, business) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(business);

  });

};

/**
 * Delete/Archive a single business.
 *
 * @desc Fetch a business with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteBusiness(req, res, next) {
  debug('deleting business:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Business.delete(query, function cb(err, business) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    res.json(business);

  });

};

/**
 * Get a collection of businesses with pagination
 *
 * @desc Fetch a collection of businesses
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAllByPagination = function fetchAllbusinesses(req, res, next) {
  debug('get a collection of businesses');

  var page   = req.query.page || 1;
  var limit  = req.query.per_page || 10;

  var opts = {
    page: page,
    limit: limit,
    sort: { }
  };
  var query = {};

  Business.getCollectionByPagination(query, opts, function cb(err, businesses) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(businesses);
  });
};

/**
 * Get a collection of businesses
 *
 * @desc Fetch a collection of businesses
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllbusinesses(req, res, next) {
  debug('get a collection of businesses');

  var query = {};
  var opts = {};

  Business.getCollection(query, opts, function cb(err, businesses) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(businesses);
  });
};

/**
 * Get a collection of businesses by category.
 *
 * @desc Fetch a collection of businesses
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.getByCategory = function getByCategory(req, res, next) {
  debug('get a collection of businesses by category ' + req.params.id);

  getCollectionByType('category', req.params.id, req, res, next);
};

/**
 * Get a collection of businesses by subCategory
 *
 * @desc Fetch a collection of businesses
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.getBySubCategory = function getBySubCategory(req, res, next) {
  debug('get a collection of businesses by sub-category ' + req.params.id);

  getCollectionByType('sub_category', req.params.id, req, res, next);
};


function getCollectionByType(type, id, req, res, next) {
  var query = {};
  var opts = {};
  query[type] = id;

  Business.getCollection(query, opts, function cb(err, businesses) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(businesses);
  });
}
