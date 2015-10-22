// Access Layer for Template Data.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-template');
var moment  = require('moment');
var _       = require('lodash');

var Template    = require('../models/template');
var SubCategory = require('../models/sub-category');
var Category    = require('../models/category');
var mongoUpdate = require('../lib/mongo-update');

var returnFields = Template.whitelist;
var population   = [{
  path: 'category',
  select: Category.whitelist
}, {
  path: 'sub_category',
  select: SubCategory.whitelist
}];

/**
 * create a new template.
 *
 * @desc  creates a new template and saves them
 *        in the database
 *
 * @param {Object}  templateData  Data for the template to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(templateData, cb) {
  debug('creating a new template');

  var searchQuery = { name: templateData.name };

  // Make sure template does not exist
  Template.findOne(searchQuery, function templateExists(err, isPresent) {
    if(err) {
      return cb(err);
    }

    if(isPresent) {
      exports.get({ _id: isPresent._id }, function (err, template) {
        if(err) {
          return cb(err);
        }

        cb(null, template);

      });

      return;

    }


    // Create template if is new.
    var templateModel  = new Template(templateData);

    templateModel.save(function saveTemplate(err, data) {
      if (err) {
        return cb(err);
      }


      exports.get({ _id: data._id }, function (err, template) {
        if(err) {
          return cb(err);
        }

        cb(null, template);

      });

    });

  });

};

/**
 * delete a template
 *
 * @desc  delete data of the template with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting template: ', query);

  Template
    .findOne(query, returnFields)
    .populate(population)
    .exec(function deleteTemplate(err, template) {
      if (err) {
        return cb(err);
      }

      if(!template) {
        return cb(null, {});
      }

      template.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, template);

      });

    });
};

/**
 * update a template
 *
 * @desc  update data of the template with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating template: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: returnFields
  };

  updates = mongoUpdate(updates);

  Template
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updateTemplate(err, template) {
      if(err) {
        return cb(err);
      }

      cb(null, template || {});
    });
};

/**
 * get a template.
 *
 * @desc get a template with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting template ', query);

  Template
    .findOne(query, returnFields)
    .populate(population)
    .exec(function(err, template) {
      if(err) {
        return cb(err);
      }

      cb(null, template || {});
    });
};

/**
 * get a collection of templates
 *
 * @desc get a collection of templates from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of templates');

  Template
    .find(query, returnFields)
    .populate(population)
    .exec(function (err, templates) {
      if(err) {
        return cb(err);
      }

      cb(null, templates);
    });

};

/**
 * get a collection of templates using pagination
 *
 * @desc get a collection of templates from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollectionByPagination = function getCollection(query, qs, cb) {
  debug('fetching a collection of templates');

  var opts = {
    columns:  returnFields,
    sortBy:   qs.sort || {},
    populate: population,
    page:     qs.page,
    limit:    qs.limit
  };


  Template.paginate(query, opts, function (err, docs, page, count) {
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
