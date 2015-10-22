/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug      = require('debug')('api:subCategory-controller');
var async      = require('async');
var moment     = require('moment');
var _          = require('lodash');

var config          = require('../config');
var CustomError     = require('../lib/custom-error');
var SubCategory     = require('../dal/sub-category');
var Category        = require('../dal/category');

/**
 * Create a subCategory.
 *
 * @desc create a subCategory and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createSubCategory(req, res, next) {
  debug('create subCategory');

  // Begin workflow
  var workflow = new EventEmitter();
  var body = req.body;

  // validating subCategory data
  // cant trust anyone
  workflow.on('validate', function validateSubCategory() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'SUBCATEGORY_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createSubCategory');
  });

  workflow.on('createSubCategory', function createSubCategory() {
    var verificationLink;


    SubCategory.create(body, function (err, data) {
      if(err) {
        return next(CustomError({
          name: 'SUBCATEGORY_CREATION_ERROR',
          message: err.message
        }));
      }

      workflow.emit('updateParentCategory', data);

    });


  });

  workflow.on('updateParentCategory', function (data) {
    var subCategory = data.doc;

    if(!data.isNew) {
      workflow.emit('completeWorkflow', subCategory);
      return;
    } else {
      var query = {
        _id: body.category
      };
      var update = {
        sub_categories: subCategory._id
      };


      Category.update(query, update, function (err, category) {
        if(err) {
          return next(CustomError({
            name: 'SUBCATEGORY_CREATION_ERROR',
            message: err.message
          }));
        }

        if(!category._id) {
          return next(CustomError({
            name: 'SUBCATEGORY_CREATION_ERROR',
            message: 'Category -> ' + body.category + ' does not exist'
          }));
        }

        workflow.emit('completeWorkflow', subCategory);

      });
    }

  });


  workflow.on('completeWorkflow', function (subCategory) {

    res.status(201).json(subCategory);
  });

  workflow.emit('validate');
};

/**
 * Get a single subCategory.
 *
 * @desc Fetch a subCategory with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneSubCategory(req, res, next) {
  debug('fetch subCategory:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  SubCategory.get(query, function cb(err, subCategory) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(subCategory);
  });
};

/**
 * Update a single subCategory.
 *
 * @desc Fetch a subCategory with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateSubCategory(req, res, next) {
  debug('updating subCategory:'+ req.params.id);

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;


  update = {
    $set: body
  };

  SubCategory.update(query, update, function cb(err, subCategory) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(subCategory);

  });

};

/**
 * Delete/Archive a single subCategory.
 *
 * @desc Fetch a subCategory with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteSubCategory(req, res, next) {
  debug('deleting subCategory:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  SubCategory.delete(query, function cb(err, subCategory) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    res.json(subCategory);

  });

};

/**
 * Get a collection of subCategories with pagination
 *
 * @desc Fetch a collection of subCategories
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAllByPagination = function fetchAllsubCategories(req, res, next) {
  debug('get a collection of subCategories');

  var page   = req.query.page || 1;
  var limit  = req.query.per_page || 10;

  var opts = {
    page: page,
    limit: limit,
    sort: { }
  };
  var query = {};

  SubCategory.getCollectionByPagination(query, opts, function cb(err, subCategories) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(subCategories);
  });
};

/**
 * Get a collection of subCategories
 *
 * @desc Fetch a collection of subCategories
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllsubCategories(req, res, next) {
  debug('get a collection of subCategories');

  var query = {};
  var opts = {};

  SubCategory.getCollection(query, opts, function cb(err, subCategories) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(subCategories);
  });
};
