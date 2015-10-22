// Access Layer for SubCategory Data.
/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-subCategory');
var moment  = require('moment');
var _       = require('lodash');

var SubCategory      = require('../models/sub-category');
var Category    = require('../models/category');
var mongoUpdate = require('../lib/mongo-update');

var returnFields = SubCategory.whitelist;
var population = [{
  path: 'category',
  select: Category.whitelist
}];

/**
 * create a new subCategory.
 *
 * @desc  creates a new subCategory and saves them
 *        in the database
 *
 * @param {Object}  subCategoryData  Data for the subCategory to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(subCategoryData, cb) {
  debug('creating a new subCategory');

  var searchQuery = { name: subCategoryData.name };

  // Make sure subCategory does not exist
  SubCategory.findOne(searchQuery, function subCategoryExists(err, isPresent) {
    if(err) {
      return cb(err);
    }

    if(isPresent) {
      exports.get({ _id: isPresent._id }, function (err, subCategory) {
        if(err) {
          return cb(err);
        }

        cb(null, { isNew: false, doc: subCategory });

      });

      return;
    }


    // Create subCategory if is new.
    var subCategoryModel  = new SubCategory(subCategoryData);

    subCategoryModel.save(function saveSubCategory(err, data) {
      if (err) {
        return cb(err);
      }


      exports.get({ _id: data._id }, function (err, subCategory) {
        if(err) {
          return cb(err);
        }

        cb(null, { isNew: true, doc: subCategory });

      });

    });

  });

};

/**
 * delete a subCategory
 *
 * @desc  delete data of the subCategory with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting subCategory: ', query);

  SubCategory
    .findOne(query, returnFields)
    .populate(population)
    .exec(function deleteSubCategory(err, subCategory) {
      if (err) {
        return cb(err);
      }

      if(!subCategory) {
        return cb(null, {});
      }

      subCategory.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, subCategory);

      });

    });
};

/**
 * update a subCategory
 *
 * @desc  update data of the subCategory with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating subCategory: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: returnFields
  };

  updates = mongoUpdate(updates);

  SubCategory
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updateSubCategory(err, subCategory) {
      if(err) {
        return cb(err);
      }

      cb(null, subCategory || {});
    });
};

/**
 * get a subCategory.
 *
 * @desc get a subCategory with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting subCategory ', query);

  SubCategory
    .findOne(query, returnFields)
    .populate(population)
    .exec(function(err, subCategory) {
      if(err) {
        return cb(err);
      }

      cb(null, subCategory || {});
    });
};

/**
 * get a collection of subCategories
 *
 * @desc get a collection of subCategories from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of subCategories');

  SubCategory
    .find(query, returnFields)
    .populate(population)
    .exec(function (err, subCategories) {
      if(err) {
        return cb(err);
      }

      cb(null, subCategories);
    });

};

/**
 * get a collection of subCategories using pagination
 *
 * @desc get a collection of subCategories from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollectionByPagination = function getCollection(query, qs, cb) {
  debug('fetching a collection of subCategories');

  var opts = {
    columns:  returnFields,
    sortBy:   qs.sort || {},
    populate: population,
    page:     qs.page,
    limit:    qs.limit
  };


  SubCategory.paginate(query, opts, function (err, docs, page, count) {
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
