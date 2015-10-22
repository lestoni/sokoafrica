// Access Layer for Plan Data.
/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-plan');
var moment  = require('moment');
var _       = require('lodash');

var Plan      = require('../models/plan');
var mongoUpdate = require('../lib/mongo-update');

var returnFields = Plan.whitelist;
var population = [];

/**
 * create a new plan.
 *
 * @desc  creates a new plan and saves them
 *        in the database
 *
 * @param {Object}  planData  Data for the plan to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(planData, cb) {
  debug('creating a new plan');

  var searchQuery = { name: planData.name };

  // Make sure plan does not exist
  Plan.findOne(searchQuery, function planExists(err, isPresent) {
    if(err) {
      return cb(err);
    }

    if(isPresent) {
      exports.get({ _id: isPresent._id }, function (err, plan) {
        if(err) {
          return cb(err);
        }

        cb(null, plan);

      });

      return;
    }


    // Create plan if is new.
    var planModel  = new Plan(planData);

    planModel.save(function savePlan(err, data) {
      if (err) {
        return cb(err);
      }


      exports.get({ _id: data._id }, function (err, plan) {
        if(err) {
          return cb(err);
        }

        cb(null, plan);

      });

    });

  });

};

/**
 * delete a plan
 *
 * @desc  delete data of the plan with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting plan: ', query);

  Plan
    .findOne(query, returnFields)
    .populate(population)
    .exec(function deletePlan(err, plan) {
      if (err) {
        return cb(err);
      }

      if(!plan) {
        return cb(null, {});
      }

      plan.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, plan);

      });

    });
};

/**
 * update a plan
 *
 * @desc  update data of the plan with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating plan: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: returnFields
  };

  updates = mongoUpdate(updates);

  Plan
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updatePlan(err, plan) {
      if(err) {
        return cb(err);
      }

      cb(null, plan || {});
    });
};

/**
 * get a plan.
 *
 * @desc get a plan with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting plan ', query);

  Plan
    .findOne(query, returnFields)
    .populate(population)
    .exec(function(err, plan) {
      if(err) {
        return cb(err);
      }

      cb(null, plan || {});
    });
};

/**
 * get a collection of plans
 *
 * @desc get a collection of plans from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of plans');

  Plan
    .find(query, returnFields)
    .populate(population)
    .exec(function (err, plans) {
      if(err) {
        return cb(err);
      }

      cb(null, plans);
    });

};

/**
 * get a collection of plans using pagination
 *
 * @desc get a collection of plans from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollectionByPagination = function getCollection(query, qs, cb) {
  debug('fetching a collection of plans');

  var opts = {
    columns:  returnFields,
    sortBy:   qs.sort || {},
    populate: population,
    page:     qs.page,
    limit:    qs.limit
  };


  Plan.paginate(query, opts, function (err, docs, page, count) {
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
