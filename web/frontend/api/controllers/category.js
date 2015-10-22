/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug      = require('debug')('api:category-controller');
var async      = require('async');
var moment     = require('moment');
var _          = require('lodash');

var config          = require('../config');
var CustomError     = require('../lib/custom-error');
var Category            = require('../dal/category');

/**
 * Create a category.
 *
 * @desc create a category and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createCategory(req, res, next) {
  debug('create category');

  // Begin workflow
  var workflow = new EventEmitter();
  var body = req.body;

  // validating category data
  // cant trust anyone
  workflow.on('validate', function validateCategory() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'CATEGORY_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createCategory');
  });

  workflow.on('createCategory', function createCategory() {
    var verificationLink;


    Category.create(body, function (err, category) {
      if(err) {
        return next(CustomError({
          name: 'CATEGORY_CREATION_ERROR',
          message: err.message
        }));
      }


      workflow.emit('completeWorkflow', category);

    });


  });


  workflow.on('completeWorkflow', function (category) {

    res.status(201).json(category);
  });

  workflow.emit('validate');
};

/**
 * Get a single category.
 *
 * @desc Fetch a category with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneCategory(req, res, next) {
  debug('fetch category:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Category.get(query, function cb(err, category) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(category);
  });
};

/**
 * Update a single category.
 *
 * @desc Fetch a category with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateCategory(req, res, next) {
  debug('updating category:'+ req.params.id);

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;


  update = {
    $set: body
  };

  Category.update(query, update, function cb(err, category) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(category);

  });

};

/**
 * Delete/Archive a single category.
 *
 * @desc Fetch a category with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteCategory(req, res, next) {
  debug('deleting category:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Category.delete(query, function cb(err, category) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    res.json(category);

  });

};

/**
 * Get a collection of categories with pagination
 *
 * @desc Fetch a collection of categories
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAllByPagination = function fetchAllcategories(req, res, next) {
  debug('get a collection of categories');

  var page   = req.query.page || 1;
  var limit  = req.query.per_page || 10;

  var opts = {
    page: page,
    limit: limit,
    sort: { }
  };
  var query = {};

  Category.getCollectionByPagination(query, opts, function cb(err, categories) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(categories);
  });
};

/**
 * Get a collection of categories
 *
 * @desc Fetch a collection of categories
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllcategories(req, res, next) {
  debug('get a collection of categories');

  var query = {};
  var opts = {};

  Category.getCollection(query, opts, function cb(err, categories) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(categories);
  });
};
