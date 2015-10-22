/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug      = require('debug')('api:plan-controller');
var async      = require('async');
var moment     = require('moment');
var _          = require('lodash');

var config          = require('../config');
var CustomError     = require('../lib/custom-error');
var Plan            = require('../dal/plan');

/**
 * Create a plan.
 *
 * @desc create a plan and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createPlan(req, res, next) {
  debug('create plan');

  // Begin workflow
  var workflow = new EventEmitter();
  var body = req.body;

  // validating plan data
  // cant trust anyone
  workflow.on('validate', function validatePlan() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'PLAN_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createPlan');
  });

  workflow.on('createPlan', function createPlan() {
    var verificationLink;


    Plan.create(body, function (err, plan) {
      if(err) {
        return next(CustomError({
          name: 'PLAN_CREATION_ERROR',
          message: err.message
        }));
      }


      workflow.emit('completeWorkflow', plan);

    });


  });


  workflow.on('completeWorkflow', function (plan) {

    res.status(201).json(plan);
  });

  workflow.emit('validate');
};

/**
 * Get a single plan.
 *
 * @desc Fetch a plan with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOnePlan(req, res, next) {
  debug('fetch plan:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Plan.get(query, function cb(err, plan) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(plan);
  });
};

/**
 * Update a single plan.
 *
 * @desc Fetch a plan with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updatePlan(req, res, next) {
  debug('updating plan:'+ req.params.id);

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;


  update = {
    $set: body
  };

  Plan.update(query, update, function cb(err, plan) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(plan);

  });

};

/**
 * Delete/Archive a single plan.
 *
 * @desc Fetch a plan with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deletePlan(req, res, next) {
  debug('deleting plan:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Plan.delete(query, function cb(err, plan) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    res.json(plan);

  });

};

/**
 * Get a collection of plans with pagination
 *
 * @desc Fetch a collection of plans
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAllByPagination = function fetchAllplans(req, res, next) {
  debug('get a collection of plans');

  var page   = req.query.page || 1;
  var limit  = req.query.per_page || 10;

  var opts = {
    page: page,
    limit: limit,
    sort: { }
  };
  var query = {};

  Plan.getCollectionByPagination(query, opts, function cb(err, plans) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(plans);
  });
};

/**
 * Get a collection of plans
 *
 * @desc Fetch a collection of plans
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAllplans(req, res, next) {
  debug('get a collection of plans');

  var query = {};
  var opts = {};

  Plan.getCollection(query, opts, function cb(err, plans) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(plans);
  });
};
