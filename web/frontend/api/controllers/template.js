/** *
 * Load Module Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

var debug      = require('debug')('api:template-controller');
var async      = require('async');
var moment     = require('moment');
var _          = require('lodash');

var config          = require('../config');
var CustomError     = require('../lib/custom-error');
var Template        = require('../dal/template');
var TemplateModel   = require('../models/template');

/**
 * Create a template.
 *
 * @desc create a template and add them to the database
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.create = function createTemplate(req, res, next) {
  debug('create template');

  // Begin workflow
  var workflow = new EventEmitter();
  var body = req.body;

  // validating template data
  // cant trust anyone
  workflow.on('validate', function validateTemplate() {

    var errs = req.validationErrors();

    if(errs) {
      return next(CustomError({
        name: 'template_CREATION_ERROR',
        message: errs.message
      }));
    }

    workflow.emit('createTemplate');
  });

  workflow.on('createTemplate', function createTemplate() {

    TemplateModel.count({}, function (err, count) {
      if(err) {
        return next(CustomError({
          name: 'template_CREATION_ERROR',
          message: err.message
        }));
      }

      body.number = count + 1;

      Template.create(body, function (err, template) {
        if(err) {
          return next(CustomError({
            name: 'template_CREATION_ERROR',
            message: err.message
          }));
        }


        workflow.emit('completeWorkflow', template);

      });

    });


  });


  workflow.on('completeWorkflow', function (template) {

    res.status(201).json(template);
  });

  workflow.emit('validate');
};

/**
 * Get a single template.
 *
 * @desc Fetch a template with the given id from the database.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchOne = function fetchOneTemplate(req, res, next) {
  debug('fetch template:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Template.get(query, function cb(err, template) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(template);
  });
};

/**
 * Update a single template.
 *
 * @desc Fetch a template with the given id from the database
 *       and update their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.update = function updateTemplate(req, res, next) {
  debug('updating template:'+ req.params.id);

  var query = {
    _id: req.params.id
  };
  var body = req.body;
  var update;


  update = {
    $set: body
  };

  Template.update(query, update, function cb(err, template) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(template);

  });

};

/**
 * Delete/Archive a single template.
 *
 * @desc Fetch a template with the given id from the database
 *       and delete their data
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.delete = function deleteTemplate(req, res, next) {
  debug('deleting template:' + req.params.id);

  var query = {
    _id: req.params.id
  };

  Template.delete(query, function cb(err, template) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }


    res.json(template);

  });

};

/**
 * Get a collection of templates with pagination
 *
 * @desc Fetch a collection of templates
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAllByPagination = function fetchAlltemplates(req, res, next) {
  debug('get a collection of templates');

  var page   = req.query.page || 1;
  var limit  = req.query.per_page || 10;

  var opts = {
    page: page,
    limit: limit,
    sort: { }
  };
  var query = {};

  Template.getCollectionByPagination(query, opts, function cb(err, templates) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(templates);
  });
};

/**
 * Get a collection of templates
 *
 * @desc Fetch a collection of templates
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.fetchAll = function fetchAlltemplates(req, res, next) {
  debug('get a collection of templates');

  var query = {};
  var opts = {};

  Template.getCollection(query, opts, function cb(err, templates) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(templates);
  });
};

/**
 * Get a collection of templates by category.
 *
 * @desc Fetch a collection of templates
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.getByCategory = function getByCategory(req, res, next) {
  debug('get a collection of templates by category ' + req.params.id);

  getCollectionByType('category', req.params.id, req, res, next);
};

/**
 * Get a collection of templates by subCategory
 *
 * @desc Fetch a collection of templates
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware dispatcher
 */
exports.getBySubCategory = function getBySubCategory(req, res, next) {
  debug('get a collection of templates by sub-category ' + req.params.id);

  getCollectionByType('sub_category', req.params.id, req, res, next);
};


function getCollectionByType(type, id, req, res, next) {
  var query = {};
  var opts = {};
  query[type] = id;

  Template.getCollection(query, opts, function cb(err, templates) {
    if(err) {
      return next(CustomError({
        name: 'SERVER_ERROR',
        message: err.message,
        status: 500
      }));
    }

    res.json(templates);
  });
}
